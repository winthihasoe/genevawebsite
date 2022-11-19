<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class BranchController extends Controller
{
    public function index()
    {
        $trainingOfficers = DB::table('users')->where('is_training_class_officer', true)->get();
        return Inertia::render('Admin/Branches', [
            'branches' => Branch::all(),
            'trainingOfficers' => $trainingOfficers,
        ]);
    }

    // Store New branch
    public function store(Request $request)
    {
        $request->validate([
            'branch'=>'required',
            'address'=>'required',
            'phone'=>'required',
            'start_date'=>'required',
            'user_id' => 'required',     
        ]);
        Branch::create([
            'user_id' => $request->user_id,
            'branch'=> $request->branch,
            'address'=>$request->address,
            'phone'=>$request->phone,
            'trainer_names' => $request->trainer_names,
            'start_date'=>$request->start_date,
        ]);

        return redirect(route('branches'))->with('message', 'New Branch is added');
    }

    // Show specific branch according to id
    public function show($id)
    {
        $showBranch = Branch::find($id);
        $trainingOfficers = DB::table('users')->where('is_training_class_officer', true)->get();
        $officer = User::find($showBranch->user_id);
        return Inertia::render('Admin/ShowBranch', [
            'showBranch' => $showBranch,
            'officer' => $officer,
            'trainingOfficers' => $trainingOfficers,
        ]);
    }

    /**
     * Update specific branch
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'branch'=>'required',
            'address'=>'required',
            'phone'=>'required',
            'user_id'=>'required',
            'start_date'=>'required',       
        ]);

        $updateBranch = Branch::find($id);
        $updateBranch->branch = $request->branch;
        $updateBranch->address = $request->address;
        $updateBranch->phone = $request->phone;
        $updateBranch->user_id = $request->user_id;
        $updateBranch->trainer_names = $request->trainer_names;
        $updateBranch->start_date = $request->start_date;
        $updateBranch->update();

        return back();

    }
}
