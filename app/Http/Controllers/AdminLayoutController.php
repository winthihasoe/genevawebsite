<?php

namespace App\Http\Controllers;

use App\Models\Caregiver;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminLayoutController extends Controller
{
    public function dashboard () {
        return Inertia::render('Admin/Dashboard');
    }
}
