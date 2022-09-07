<?php

namespace App\Models;

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
        'phone',
        'join_date',
        'level',
        'skills',
        'image',
        'rating',
        'review',
    ];

    public function skill (){
        return $this->belongsTo(Skill::class);
    }

    protected $casts = [
        'skills' => 'array'
    ];
}
