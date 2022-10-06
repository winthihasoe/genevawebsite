<?php

namespace App\Http\Controllers;

use App\Models\ElderCareTopic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ElderCareTopicController extends Controller
{
    public function index()
    {
        $elderSkillTopics = ElderCareTopic::get();
        return Inertia::render('Admin/ElderCareTopics', [
            'elderSkillTopics' => $elderSkillTopics,
        ]);
    }

    // Show the create form
    public function create()
    {
        //
    }

    // Store data to migration table
    public function store(Request $request)
    {

        $request->validate([
            'newSkill'=>'required',
        ]);

        ElderCareTopic::create([
            'topic' => $request->newSkill,
        ]);

        return back();
    }

    // Show update form 
    public function edit(Request $request)
    {
        //
    }

    // Store update form 
    public function update(Request $request)
    {
        //
    }

    // Delete Elder Care Topic 
    public function destroy($id)
    {
        $deleteElderCareTopic = ElderCareTopic::find($id);
        $deleteElderCareTopic->delete();
        return back();
    }

}
