<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BranchController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Branches', [
            'branches' => Branch::all(),
        ]);
    }

    // Store New branch
    public function store(Request $request)
    {
        $request->validate([
            'branch'=>'required',
            'address'=>'required',
            'phone'=>'required',
            'officer_name'=>'required',
            'start_date'=>'required',         
        ]);

        Branch::create(
            $request->all()
        );

        return redirect(route('branches'))->with('message', 'New Branch is added');
    }

    // Show specific branch according to id
    public function show($id)
    {
        $showBranch = Branch::find($id);
        return Inertia::render('Admin/ShowBranch', [
            'showBranch' => $showBranch,
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
            'officer_name'=>'required',
            'start_date'=>'required',         
        ]);

        $updateBranch = Branch::find($id);
        $updateBranch->branch = $request->branch;
        $updateBranch->address = $request->address;
        $updateBranch->phone = $request->phone;
        $updateBranch->officer_name = $request->officer_name;
        $updateBranch->trainer_names = $request->trainer_names;
        $updateBranch->start_date = $request->start_date;
        $updateBranch->update();

        return back();

    }
}
