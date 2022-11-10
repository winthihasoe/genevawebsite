<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Caregiver;
use App\Models\ChildCareTopic;
use App\Models\ChildTraining;
use App\Models\ElderCareTopic;
use App\Models\ElderTraining;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PageController extends Controller
{
    // Public page showing information of our service
    public function index () {
        return Inertia::render('Index');
    }

    // Start child care request form for customer
    // This form have some step to fill detail of customer
    // This form is guard with middleware 'auth'
    public function startChildCare () {
        return Inertia::render('ChildCareStartFromHome', [
            'careTopics' => ChildCareTopic::get(),
        ]);
    }


    public function startElderCare()
    {
        return Inertia::render('ElderCareStartFromHome', [
            'careTopics' => ElderCareTopic::get(),
        ]);
    }

    // Start from index page OurTraining component after clicking Elder Care Training
    public function showElderCareTraining()
    {
        return Inertia::render('Training/ElderCareTraining', [
            'elderTrainings' => ElderTraining::get(),
        ]);
    }

    // Start from index page OurTraining component
    public function showChildCareTraining()
    {
        return Inertia::render('Training/ChildCareTraining',  [
            'childTrainings' => ChildTraining::get(),
        ]);
    }

    // -------------------------------------------- // 
    // Training Officer page dashboard showing
    public function trainingOfficerPage()
    {
        return Inertia::render('TrainingOfficer/Dashboard');
    }
    
    // Show training branch to related training officer
    public function showMyBranch($id)
    {
        //
    }
}
