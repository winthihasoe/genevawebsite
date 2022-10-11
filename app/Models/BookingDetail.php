<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookingDetail extends Model
{
    use HasFactory;

    protected $primaryKey = 'caregiver_id';

    protected $fillable = [
        'booking_id',
        'caregiver_id',
        'patient_age',
        'needs',
        'level',
        'price',
        'duties',
        'note_to_caregiver',
    ];

    protected $casts = [
        'needs' => 'array'
    ];

}
