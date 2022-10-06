<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\BookingDetail;
use App\Models\Caregiver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::get();
        return Inertia::render('Admin/AllBookings', [
            'bookings' => $bookings,
        ]);
    }

    // Show booking forms according to customer choose whether Care is Elder or Child 
    public function booking($id, Request $request)
    {
       
        $care = $request->care;
        $bookedCaregiver = Caregiver::find($id);
        if ($care == 'child') {
            // Returning Elder care booking form according to bookedCaregiver and customer need i.e care = "child"
            return Inertia::render('ChildCare' , [
                'bookedCaregiver' => $bookedCaregiver->only('id', 'name', 'height', 'weight', 'level', 'skills', 'care', 'image'),
            ]);
        } else if ($care == 'elder') {
            // Returning Elder care booking form according to bookedCaregiver and customer need i.e care = "elder" 
            return Inertia::render('ElderCare' , [
                'bookedCaregiver' => $bookedCaregiver->only('id', 'name', 'height', 'weight', 'level', 'skills', 'care', 'image'),
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
        ]);

        // To get latest entery in booking table by this user id
        $booking_id = Booking::where('user_id', $user_id)->get()->last()->id;

        BookingDetail::create([
            'booking_id' => $booking_id,
            'caregiver_id' => $caregiver_id,
            'patient_age' => $request->elderAge,
            'needs' => $request->elderCareTopics,

            // To solve the level (think that i have to put a TextField in hero section form)
            // But adding caregiver level in the "Recheck Detail" form for remind to customer
            'level' => 'skilled',

            // This price is change according to caregiver level 
            'price' => 18000,
            'duties' => 2,
        ]);

        // After returning or redirecting, prevent user return back to previous FinishBooking page for double entery booking.
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
}
