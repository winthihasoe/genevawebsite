<?php

namespace App\Http\Controllers;

use App\Models\ChildTraining;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ChildTrainingController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/ChildTrainingCustomize');
    }

    public function storeChildTrainingPost(Request $request)
    {
        $user_id = Auth::user()->id;
        $request->validate([
            'post_image' => 'required',
            'post_title' => 'required',
            'post_body' => 'required',
        ]);

        $image = request('post_image');
        $image_name = uniqid().'_'.$image->getClientOriginalName();
        $image->move(public_path('images/training'),$image_name);
        
        // dd($request);

        ChildTraining::create([
            'user_id' =>$user_id,
            'post_title'=>$request->post_title,
            'post_body'=>$request->post_body,
            'post_footer'=>$request->post_footer,
            'post_image'=>$image_name,
        ]);
        
        return back()->with('message', 'Post successful');
    }
}
