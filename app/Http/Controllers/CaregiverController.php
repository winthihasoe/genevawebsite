<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCaregiverRequest;
use App\Http\Requests\UpdateCaregiverRequest;
use App\Models\Caregiver;
use App\Models\ChildCareTopic;
use App\Models\ElderCareTopic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CaregiverController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin/Caregivers', [
            'caregivers' => Caregiver::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $elderCareTopics = ElderCareTopic::get();
        $childCareTopics = ChildCareTopic::get();
        return Inertia::render('Admin/CreateCaregiver', [
            'elderCareTopics' => $elderCareTopics,
            'childCareTopics' => $childCareTopics,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCaregiverRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCaregiverRequest $request)
    {
        $request->validate([
            'name'=>'required',
        ]);

        $image = request('image');
        $image_name = uniqid().'_'.$image->getClientOriginalName();
        $image->move(public_path('images/profiles'),$image_name);
        Caregiver::create([
            'name'=>$request->name,
            'nrc'=>$request->nrc,
            'age'=>$request->age,
            'gender'=>$request->gender,
            'weight'=>$request->weight,
            'height'=>$request->height,
            'address'=>$request->address,
            'location'=>$request->location,
            'phone'=>$request->phone,
            'join_date'=>$request->join_date,
            'level'=>$request->level,
            'care'=>$request->care,
            'skills'=>$request->skills,
            'image'=>$image_name,
            'rating'=>$request->rating,
            'review'=>$request->review,
        ]);
       
        return redirect('/admin/caregivers')->with('message', "Caregiver created sucessfully");
    }

    /** Choose caregiver that is continued from Hero section.
    *   After select a caregiver, user will fill CareForm to continue to finish booking
    */
    public function showDesiredCg(Request $request)
    {

        $request->validate([
                'location'=>'required',
                'care'=>'required'
        ]);
        
        // Choosing caregiver according to Location and Field of care from caregiver table
        $desiredCaregivers = DB::table('caregivers')->where('location', $request->location)->where('care', $request->care)->orWhere('care', 'elder_child')->where('location', $request->location)->get();
        
        return Inertia::render('CaregiverFound', [
            'desiredCaregivers'=> $desiredCaregivers, 'location' => $request->location,
        ]); 
    }

    /**
     * Choose caregiver that is continued from OurServices section 
     * user is already filled CareForm 
     * show caregiver according to the user needs
     */
    public function finishBookingAndChooseCaregiver(Request $request)
    {

        // Choosing caregiver according to Location and Field of care from caregiver table
       
        $desiredCaregivers = DB::table('caregivers')->where('location', $request->city)->where('care', $request->care)->orWhere('care', 'elder_child')->where('location', $request->city)->get();
        return Inertia::render('CaregiverFoundStartFromHome', [
            'desiredCaregivers'=> $desiredCaregivers, 'city' => $request->city, 'values' => $request,
        ]); 

    }

    /**
     * Show User selected caregiver
     */
    public function caregiverStartFromHome($caregiver, Request $request)
    {
        $caregiver = Caregiver::find($caregiver);
       
        return Inertia::render('CaregiverStartFromHome', [
            'caregiver' => $caregiver, 'patient_info' => $request->values,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Caregiver  $caregiver
     * @return \Illuminate\Http\Response
     */
    public function show($caregiver, Request $request)
    {
        $care = $request->care;
        
        $caregiver = Caregiver::find($caregiver);
       
        return Inertia::render('Caregiver', [
            'caregiver' => $caregiver, 'care' => $care
        ]);
    }

    // Show caregiver information in Admin site
    public function showCaregiverAdmin($caregiver, Request $request)
    {
        $care = $request->care;
        
        $caregiver = Caregiver::find($caregiver);
       
        return Inertia::render('Admin/CaregiverAdmin', [
            'caregiver' => $caregiver, 'care' => $care
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Caregiver  $caregiver
     * @return \Illuminate\Http\Response
     */
    public function edit(Caregiver $caregiver)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCaregiverRequest  $request
     * @param  \App\Models\Caregiver  $caregiver
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCaregiverRequest $request, Caregiver $caregiver)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Caregiver  $caregiver
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
       //
    }
}
