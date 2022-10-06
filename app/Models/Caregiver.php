<?php

namespace App\Models;

use Database\Factories\CaregiverFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Caregiver extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'nrc',
        'age',
        'weight',
        'height',
        'address',        
        'location',
        'phone',
        'join_date',
        'level',
        'skills',
        'image',
        'rating',
        'review',
        'care',
        'is_available',
        'is_resign',
    ];

    protected $casts = [
        'skills' => 'array'
    ];
}
