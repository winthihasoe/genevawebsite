<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Show edit user
    public function edit()
    {
        return Inertia::render('User/Edit');
    }

    public function update($user, Request $request)
    {
        $updateUser = User::find($user);
        
        $updateUser->update(
            $request->all()
        );

        return Redirect::back()->with('success', 'User updated.');

    }
}
