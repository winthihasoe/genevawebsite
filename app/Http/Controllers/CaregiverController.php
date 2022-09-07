<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCaregiverRequest;
use App\Http\Requests\UpdateCaregiverRequest;
use App\Models\Caregiver;
use Illuminate\Http\Request;
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
        return Inertia::render('Admin/CreateCaregiver');
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
            'weight'=>$request->weight,
            'height'=>$request->height,
            'address'=>$request->address,
            'phone'=>$request->phone,
            'join_date'=>$request->join_date,
            'level'=>$request->level,
            'skills'=>$request->skills,
            'image'=>$image_name,
            'rating'=>$request->rating,
            'review'=>$request->review,
        ]);
       
        return redirect('/admin/caregivers')->with('message', "Caregiver created sucessfully");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Caregiver  $caregiver
     * @return \Illuminate\Http\Response
     */
    public function show(Caregiver $caregiver)
    {
        //
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
    public function destroy(Caregiver $caregiver)
    {
        //
    }
}
