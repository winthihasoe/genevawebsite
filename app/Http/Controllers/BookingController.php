<?php

namespace App\Http\Controllers;

use App\Mail\BookingConfirmMail;
use App\Models\Booking;
use App\Models\BookingDetail;
use App\Models\Caregiver;
use App\Models\ChildCareTopic;
use App\Models\ElderCareTopic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::latest()->get();
        // dd($bookings);
        return Inertia::render('Admin/AllBookings', [
            'bookings' => $bookings,
        ]);
    }

    // Show booking forms according to customer choose whether Care is Elder or Child 
    public function booking($id, Request $request)
    {
       
        $care = $request->care;
        $city = $request->location;
        $bookedCaregiver = Caregiver::find($id);
        if ($care == 'child') {
            // Returning Elder care booking form according to bookedCaregiver and customer need i.e care = "child"
            return Inertia::render('ChildCare' , [
                'bookedCaregiver' => $bookedCaregiver->only('id', 'name', 'height', 'weight', 'level', 'skills', 'care', 'image'),
                'city' => $city,
                'careTopics' => ChildCareTopic::get(),
            ]);
        } else if ($care == 'elder') {
            // Returning Elder care booking form according to bookedCaregiver and customer need i.e care = "elder" 
            return Inertia::render('ElderCare' , [
                'bookedCaregiver' => $bookedCaregiver->only('id', 'name', 'height', 'weight', 'level', 'skills', 'care', 'image'),
                'city' => $city,
                'careTopics' => ElderCareTopic::get(),
            ]);
        } else {
            // Returning a 404 page
            return back();
        }
        
    }

    public function store(Request $request)
    {
        $user_id = auth()->user()->id;
        
        $caregiver_id = $request->id;
        //Making Caregiver unavailable for futher booking
        Caregiver::find($caregiver_id)->update(['is_available' => false]);

        $caregiver_photo = Caregiver::find($caregiver_id)->image;
        // dd($caregiver_photo);

        Booking::create([
            'user_id'=>$user_id,
            'patient_name' => $request->patient_name,
            'address' => $request->address,
            'city' => $request->city,
            'phone' => $request->phone,            
            'start_date'=>$request->startDate,
            'end_date'=>$request->endDate,
            'care' => $request->care,
            'duty' => $request->dutyAssign,
            'caregiver_photo' => $caregiver_photo,
        ]);

        // To get latest entery in booking table by this user id
        $booking_id = Booking::where('user_id', $user_id)->get()->last()->id;
        
        if($request->level == 'semi'){
            $price = 16000;
        }
        if ($request->level == 'skilled'){
            $price = 20000;
        }
        if ($request->level == 'advanced'){
            $price = 24000;
        } 


        BookingDetail::create([
            'booking_id' => $booking_id,
            'caregiver_id' => $caregiver_id,
            'patient_age' => $request->patientAge,
            'needs' => $request->needs,

            // To solve the level (think that i have to put a TextField in hero section form)
            // But adding caregiver level in the "Recheck Detail" form for remind to customer
            'level' => $request->level,

            // This price is change according to caregiver level 
            'price' => $price,
            'duties' => 2,
        ]);

        // After returning or redirecting, prevent user return back to previous FinishBooking page for double entery booking.
        $user_email = auth()->user()->email;
        Mail::to($user_email)->send(new BookingConfirmMail);
        return  redirect(route('userBookings'));
    }

    // Confirmation page for after fullfilled the booking form
    public function finishBooking(Request $request)
    {
        $data = $request->values;
    return Inertia::render('FinishBooking', [
            'data' => $data,
        ]);
    }

    // Show custom booking according to id
    public function show($id)
    {
        $bookingDetail = Booking::find($id)->bookingDetail;
        $bookedCaregiver = Caregiver::find($bookingDetail->caregiver_id);
        
        return Inertia::render('Admin/ShowBookingDetail', [
            'booking' => Booking::find($id),
            'bookingDetail' => $bookingDetail,
            'bookedCaregiver' => $bookedCaregiver,
        ]);
    }

    // Bookings made by customer
    public function userBookings()
    {
        $userId = Auth()->user()->id;
        $userBookings = DB::table('bookings')->where('user_id', $userId)->latest()->get();
        // $userBookingDetail = Booking::find(4)->bookingDetail;
        // User booking cards will contain caregiver name (Plan to make a collection)
        return Inertia::render('User/UserBookings', [
            'userBookings' => $userBookings,
        ]);
    }

    public function userBookingDetail($id)
    {
        $userBooking = Booking::find($id);
        $userBookingDetail = Booking::find($id)->bookingDetail;
        $bookedCaregiver = Caregiver::find($userBookingDetail->caregiver_id);
        // dd($userBookingDetail);
        return Inertia::render('User/UserBookingDetail', [
            'userBooking' => $userBooking,
            'userBookingDetail' => $userBookingDetail,
            'bookedCaregiver' => $bookedCaregiver,
        ]);
    }

    // Show edit form for userbooking detail
    public function editUserBookingDetail(Request $request, $id)
    {
        $updateBooking = Booking::find($id);
        $updateBookingDetail = Booking::find($id)->bookingDetail;
        // dd($updateBookingDetail);

        $request->validate([
            'patient_name'=>'required',
            'patient_age' => 'required',
            'address'=>'required',
            'phone'=>'required',
            'city'=>'required',
            'start_date'=>'required',
            'duty'=>'required',
            'needs'=>'required',
        ]);

        $updateBookingDetail->update([
            'needs' => $request->needs,
            'patient_age' => $request->patient_age,
            'note_to_caregiver' => $request->note_to_caregiver,
        ]);
        
        $updateBooking->update([
            'patient_name' => $request->patient_name,
            'address' => $request->address,
            'phone' => $request->phone,
            'city' => $request->city,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'duty' => $request->duty,
        ]);

        
        
        return redirect(route('userBookings'))->with('message', 'Your booking is updated!');
    }

    public function bookingToDuty($id)
    {
        $bookingToDuty = Booking::find($id);
       
        return redirect(route('allBooking'))->with('message', 'Duty started!');

    }

    /**
     * Edit booking detail and update even the booking started or complete
     */
    public function editBooking(Request $request, $id)
    {
        $updateBooking = Booking::find($id);
        $updateBookingDetail = Booking::find($id)->bookingDetail;

        $request->validate([
            'patient_name'=>'required',
            'patient_age' => 'required',
            'address'=>'required',
            'phone'=>'required',
            'city'=>'required',
            'start_date'=>'required',
            'duty'=>'required',
            'needs'=>'required',
        ]);

        $updateBookingDetail->update([
            'needs' => $request->needs,
            'patient_age' => $request->patient_age,
            'note_to_caregiver' => $request->note_to_caregiver,
        ]);
        
        $updateBooking->update([
            'patient_name' => $request->patient_name,
            'address' => $request->address,
            'phone' => $request->phone,
            'city' => $request->city,
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            'duty' => $request->duty,
            'is_cancel' => $request->is_cancel,
            'is_complete' => $request->is_complete,
        ]);

        $caregiverAvailable = Caregiver::find($updateBookingDetail->caregiver_id);
        if($request->is_cancel == false){
            $caregiverAvailable->is_available = false;
            $caregiverAvailable->update();
        }else if($request->is_cancel == true){
            $caregiverAvailable->is_available = true;
            $caregiverAvailable->update();
        }
        return back()->with('message', 'Booking is updated!');
    }

    public function bookingCancelled($id)
    {
        $cancelBooking = Booking::find($id);
        $cancelBooking->is_cancel = true;
        $cancelBooking->update();

        $cancelCaregiver = $cancelBooking->bookingDetail->caregiver_id;
        $makeCaregiverAvailable = Caregiver::find($cancelCaregiver);
        $makeCaregiverAvailable->is_available = true;
        $makeCaregiverAvailable->update();

        return redirect(route('allBooking'))->with('message', 'Booking cancelled!');
    }
}
