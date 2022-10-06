<?php

namespace App\Http\Controllers;

use App\Models\ChildCareTopic;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChildCareTopicController extends Controller
{
    public function index()
    {
        $childSkillTopics = ChildCareTopic::get();
        return Inertia::render('Admin/ChildCareTopics', [
            'childSkillTopics' => $childSkillTopics,
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

        ChildCareTopic::create([
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
        $deleteChildCareTopic = ChildCareTopic::find($id);
        $deleteChildCareTopic->delete();
        return back();
    }
}
