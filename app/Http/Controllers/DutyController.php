<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Caregiver;
use App\Models\Duty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DutyController extends Controller
{
    // Store new duty, hand over from bookings table
    public function store(Request $request, $id)
    {
        $bookingToDuty = Booking::find($id);
        $bookingToDuty->is_duty = true;
        $bookingToDuty->update();

        Duty::create($request->all());
        return redirect(route('allBooking'))->with('message', 'Duty started!');
    }

    // Show all elder cases 
    public function elderCases()
    {
        $elderCases = DB::table('duties')->where('care', 'elder')->latest()->get();
        return Inertia::render('Admin/ElderCases', [
            'elderCases' => $elderCases,
        ]);
    }

    // Show elder case detail
    public function showElderCaseDetail($id)
    {
        return Inertia::render('Admin/ShowElderCaseDetail', [
            'caseDetail' => Duty::find($id),
        ]);
    }

    // Show all child cases 
    public function childCases()
    {
        $childCases = DB::table('duties')->where('care', 'child')->latest()->get();
        return Inertia::render('Admin/ChildCases', [
            'childCases' => $childCases,
        ]);
    }

    // Show child case detail
    public function showChildCaseDetail($id)
    {
        return Inertia::render('Admin/ShowChildCaseDetail', [
            'caseDetail' => Duty::find($id),
        ]);
    }

    // Edit the case 
    public function editCase($id, Request $request)
    {
        $editCase = Duty::find($id);
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

        $editBookingIsComplete = Booking::find($editCase->booking_id);
        $editCaregiverIsAvailable = Caregiver::find($editCase->caregiver_id);
        if($request->is_complete == 1){
            // make booking is_complete to true
            $editBookingIsComplete->is_complete = true;
            $editBookingIsComplete->is_duty = false;
            $editBookingIsComplete->update();

            // make caregiver is_available to true
            $editCaregiverIsAvailable->is_available = true;
            $editCaregiverIsAvailable->update();
        }else if($request->is_complete == 0){
            // make booking is_complete to true
            $editBookingIsComplete->is_complete = false;
            $editBookingIsComplete->is_duty = true;
            $editBookingIsComplete->update();

            // make caregiver is_available to false
            $editCaregiverIsAvailable->is_available = false;
            $editCaregiverIsAvailable->update();
        }

        $editCase->update(
            $request->all()
        );
        return back()->with('message', 'The case is updated!');
    }

    // End the duty 
    public function endDuty(Request $request, $id)
    {
        // changing boolean value "is_complete" to true in duties table
        $endDuty = Duty::find($id);
        $endDuty->is_complete = true;
        $endDuty->update();

        // changing boolean value "is_available" to true in caregivers table
        $caregiverAvailable = Caregiver::find($endDuty->caregiver_id);
        $caregiverAvailable->is_available = true;
        $caregiverAvailable->update();

        // changing boolean value "is_complete" to true in duties table
        $bookingComplete = Booking::find($endDuty->booking_id);
        $bookingComplete->is_complete = true;
        $bookingComplete->is_duty = false;
        $bookingComplete->update();

        // $endBooking = add booking_id column in duties table

        return redirect()->back()->with('message', 'Duty ended successfully.');
    }
}
