<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentController extends Controller
{
    // Show all students
    public function index()
    {
        // show all students
        return Inertia::render('TrainingOfficer/Students');
    }
    // Create new student
    public function create()
    {
        return Inertia::render('TrainingOfficer/CreateStudent');
    }
}
