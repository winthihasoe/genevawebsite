<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class UserController extends Controller
{
    // Show all users 
    public function index()
    {
        return Inertia::render('Admin/Users', [
            'users' => User::get(),
        ]);
    }
    // Show edit user page from User site
    public function edit()
    {
        return Inertia::render('User/Edit');
    }

    // Show edit user page from Admin site
    public function editProfileFromAdmin()
    {
        return Inertia::render('Admin/EditUserProfile');
    }

    public function update($id, Request $request)
    {
        // dd($request->image);
        $updateUser = User::find($id);
        
        $updateUser->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        if($request->hasfile('image')){
            $distination = 'images/profiles/'.$updateUser->profile_photo;
            if(File::exists($distination)){
                File::delete($distination);
            }
            $image = request('image');
            $image_name = uniqid().'_'.$image->getClientOriginalName();
            $image->move(public_path('images/profiles'),$image_name);
            $updateUser->profile_photo = $image_name;
            $updateUser->update();
        }

        return Redirect::back()->with('success', 'User updated.');

    }
}
