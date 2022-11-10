<?php

namespace App\Http\Middleware;

use App\Models\ChildCareTopic;
use App\Models\ElderCareTopic;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        $elderCareTopics = ElderCareTopic::all();
        $childCareTopics = ChildCareTopic::all();
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? $request->user()->only('id', 'name', 'email', 'phone', 'profile_photo', 'is_admin', 'is_editor', 'is_training_class_officer') : null,
            ],
            'ziggy' => function () {
                return (new Ziggy)->toArray();
            },
            'care' =>  $request->care ? $request->care : null,
            'location' => $request->location ? $request->location: null,
            'elderCareTopics' => $elderCareTopics,
            'childCareTopics' => $childCareTopics,
        ]);
    }
}
