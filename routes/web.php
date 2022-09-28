<?php

use App\Http\Controllers\AdminLayoutController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

// --------------------- Guest ---------------------- 
Route::get('/', [PageController::class, 'index'])->name('home');

// --------------------- Customer -------------------
Route::middleware(['auth'])->group(function () {
    Route::get('/user/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/user/{user}', [UserController::class, 'update'])->name('user.update');
    Route::get('/start-child-care', [PageController::class, 'startChildCare'])->name('startChildCare');
    Route::get('/start-elder-care', [PageController::class, 'startElderCare'])->name('startElderCare');
    Route::get('/child-care/choose-caregiver', [PageController::class, 'chooseCaregiver'])->name('chooseCaregiver');
});

// Start from Hero section form
Route::get('/show-caregivers', [CaregiverController::class, 'showDesiredCg'])->name('showCaregivers');
Route::get('/caregiver/{caregiver}', [CaregiverController::class, 'show'])->name('caregiver');
Route::get('/{id}/booking', [BookingController::class, 'booking'])->name('booking');
Route::post('/booking', [BookingController::class, 'store'])->name('storeBooking');
Route::get('/finish-booking', [BookingController::class, 'finishBooking'])->name('finishBooking');

// ---------------------  Editor ---------------------- 

Route::prefix('admin')->middleware(['is_editor'])->group(function(){
    Route::get('/dashboard', [AdminLayoutController::class, 'dashboard'])->name('dashboard');
    Route::get('/create-caregiver', [CaregiverController::class, 'create'])->name('createCaregiver');
    Route::post('/create-caregiver', [CaregiverController::class, 'store']);
    Route::get('/caregivers', [CaregiverController::class, 'index'])->name('caregivers');
});

// ---------------------  Admin ---------------------- 

require __DIR__.'/auth.php';


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
