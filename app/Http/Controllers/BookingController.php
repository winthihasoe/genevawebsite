<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function booking(Request $request)
    {
        $care = $request->care;
        if ($care == 'baby') {
            return Inertia::render('ChildCare');
        } else {
            return Inertia::render('ElderCare');
        }
        
    }
}
