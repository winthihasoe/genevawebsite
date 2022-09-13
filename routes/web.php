<?php

use App\Http\Controllers\AdminLayoutController;
use App\Http\Controllers\CaregiverController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function(){
    return Inertia::render('Index');
});

Route::get('/child-care', function (){
    return Inertia::render('ChildCare');
});

Route::get('/choose-caregiver', function (){
    return Inertia::render('ChooseCaregiver');
});

Route::get('/show-caregivers', [CaregiverController::class, 'showDesiredCg']);

Route::prefix('admin')->group(function(){
    Route::get('/create-caregiver', [CaregiverController::class, 'create'])->name('createCaregiver');
    Route::post('/create-caregiver', [CaregiverController::class, 'store']);
    Route::get('/caregivers', [CaregiverController::class, 'index'])->middleware(['auth', 'verified'])->name('caregivers');
    Route::get('/dashboard', [AdminLayoutController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
});



require __DIR__.'/auth.php';
