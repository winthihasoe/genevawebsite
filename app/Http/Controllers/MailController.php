<?php

namespace App\Http\Controllers;

use App\Mail\BookingConfirmMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendBookingConfirmMail()
    {
        Mail::to('info@genevacaring.com')->send(new BookingConfirmMail);
        return new BookingConfirmMail();
    }
}
