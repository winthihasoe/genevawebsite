<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Duty;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DutyController extends Controller
{

    // Store new duty, hand over from bookings table
    public function store(Request $request, $id)
    {
// dd($request);
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

    // Show all elder cases 
    public function childCases()
    {
        $childCases = DB::table('duties')->where('care', 'child')->latest()->get();
        return Inertia::render('Admin/ChildCases', [
            'childCases' => $childCases,
        ]);
    }
}
