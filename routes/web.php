<?php

use App\Http\Controllers\AdminLayoutController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// --------------------- Guest ---------------------- 
Route::get('/', [PageController::class, 'index'])->name('home');

// --------------------- User ---------------------- 
Route::get('/user/edit', [UserController::class, 'edit'])->name('user.edit');
Route::put('/user/{user}', [UserController::class, 'update'])->name('user.update');
Route::get('/child-care', [PageController::class, 'childCare'])->middleware(['auth'])->name('childCare');
Route::get('/child-care/choose-caregiver', [PageController::class, 'chooseCaregiver'])->name('chooseCaregiver');

// Start from Hero section form
Route::get('/show-caregivers', [CaregiverController::class, 'showDesiredCg']);
Route::get('/caregiver/{caregiver}', [CaregiverController::class, 'show'])->name('caregiver');
Route::get('/booking', [BookingController::class, 'booking'])->name('booking');


// --------------------- Admin ---------------------- 
Route::prefix('admin')->group(function(){
    Route::get('/dashboard', [AdminLayoutController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
    Route::get('/create-caregiver', [CaregiverController::class, 'create'])->name('createCaregiver');
    Route::post('/create-caregiver', [CaregiverController::class, 'store']);
    Route::get('/caregivers', [CaregiverController::class, 'index'])->middleware(['auth', 'verified'])->name('caregivers');
});

require __DIR__.'/auth.php';
