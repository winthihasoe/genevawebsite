<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'patient_name',
        'address',
        'city',
        'phone',
        'start_date',
        'end_date',
        'care',
        'duty',
    ];

    public function bookingDetail()
    {
        return $this->hasOne(BookingDetail::class);
    }
}
