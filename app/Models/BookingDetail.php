<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'booking_id',
        'caregiver_id',
        'patient_age',
        'needs',
        'level',
        'price',
        'duties',
    ];

    protected $casts = [
        'needs' => 'array'
    ];
}
