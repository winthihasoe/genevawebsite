<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Duty extends Model
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
        'caregiver_photo',
        'caregiver_id',
        'name',
        'patient_age',
        'needs',
        'level',
        'price',
        'duties',
        'note_to_caregiver',
        'booking_created_at',
    ];

    protected $casts = [
        'needs' => 'array'
    ];
}
