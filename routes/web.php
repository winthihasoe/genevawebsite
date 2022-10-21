<?php

use App\Http\Controllers\AdminLayoutController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\CaregiverController;
use App\Http\Controllers\ChildCareTopicController;
use App\Http\Controllers\ChildTrainingController;
use App\Http\Controllers\DutyController;
use App\Http\Controllers\ElderCareTopicController;
use App\Http\Controllers\ElderTrainingController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// --------------------- Guest ---------------------- 

Route::group(['middleware' => 'prevent-back-history'],function(){
	// Auth::routes();
    Route::get('/', [PageController::class, 'index'])->name('home');
});



// --------------------- Customer -------------------
Route::middleware(['auth'])->group(function () {
    Route::get('/user/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::post('/user/{id}', [UserController::class, 'update'])->name('user.update');
    Route::get('/start-child-care', [PageController::class, 'startChildCare'])->name('startChildCare');
    Route::get('/start-elder-care', [PageController::class, 'startElderCare'])->name('startElderCare');
    Route::get('/child-care/choose-caregiver', [PageController::class, 'chooseCaregiver'])->name('chooseCaregiver');
    Route::get('/user-bookings', [BookingController::class, 'userBookings'])->name('userBookings');
    Route::get('/user-bookings/{id}', [BookingController::class, 'userBookingDetail'])->name('userBookingDetail');
    Route::put('/user-bookings/eidt/{id}', [BookingController::class, 'editUserBookingDetail'])->name('editUserBookingDetail');

    // ----------------- Training -------------------
    Route::get('/elder-care-training', [PageController::class, 'showElderCareTraining'])->name('showElderCareTraining'); // Start from index page OurTraining component
    Route::get('/child-care-training', [PageController::class, 'showChildCareTraining'])->name('showChildCareTraining'); // Start from index page OurTraining component 
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
    // Route::delete('/caregiver/{id}', [CaregiverController::class, 'destroy'])->name('destroyCaregiver');
    Route::get('/caregivers', [CaregiverController::class, 'index'])->name('caregivers');
    Route::get('/add-elder-skills', [ElderCareTopicController::class, 'index'])->name('showElderSkill');
    Route::post('/add-new-elder-skill', [ElderCareTopicController::class, 'store'])->name('addNewElderSkill');
    Route::delete('/delete-elder-skill/{id}', [ElderCareTopicController::class, 'destroy'])->name('destroyElderSkill');
    Route::get('/add-child-skills', [ChildCareTopicController::class, 'index'])->name('showChildSkill');
    Route::post('/add-new-child-skill', [ChildCareTopicController::class, 'store'])->name('addNewChildSkill');
    Route::delete('/delete-child-skill/{id}', [ChildCareTopicController::class, 'destroy'])->name('destroyChildSkill');

    // ----------- Booking ---------------
    Route::get('/all-bookings', [BookingController::class, 'index'])->name('allBooking');
    Route::get('/booking/{id}', [BookingController::class, 'show'])->name('showBooking');
    Route::put('/booking-cancelled/{id}', [BookingController::class, 'bookingCancelled'])->name('bookingCancelled');
    Route::put('/booking-to-duty/{id}', [BookingController::class, 'bookingToDuty'])->name('bookingToDuty');
    
    // ----------- Start Duty ---------------
    Route::post('/start-duty/{id}', [DutyController::class, 'store'])->name('startDuty');
    
    // ----------- Cases ---------------
    Route::get('/elder-cases', [DutyController::class, 'elderCases'])->name('elderCases');
    Route::get('/child-cases', [DutyController::class, 'childCases'])->name('childCases');

   

    // ----------- User Profile ---------------
    Route::get('/edit-profile', [UserController::class, 'editProfileFromAdmin'])->name('editProfileFromAdmin');
   
    
});

// ---------------------  Admin ---------------------- 
Route::prefix('admin')->middleware(['is_admin'])->group(function (){
    Route::get('/elder-training', [ElderTrainingController::class, 'index'])->name('elderTraining');
    Route::get('/child-training', [ChildTrainingController::class, 'index'])->name('childTraining');

    Route::get('/users', [UserController::class, 'index'])->name('users');
    Route::post('/elder-training', [ElderTrainingController::class, 'storeElderTrainingPost'])->name('storeElderTrainingPost');
    Route::post('/child-training', [ChildTrainingController::class, 'storeChildTrainingPost'])->name('storeChildTrainingPost');
});

// ---------------------  Route for mailing ----------------------
Route::get('/email', [MailController::class, 'sendBookingConfirmMail'])->name('sendBookingConfirmMail');


require __DIR__.'/auth.php';


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
