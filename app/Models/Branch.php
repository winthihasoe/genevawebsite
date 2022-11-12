<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;

    protected $fillable = [
        // Branch information
        'branch',
        'address',
        'phone',
        'officer_name',
        'trainer_names',
        'total_students',
        'start_date',
        'user_id',
    ];

    protected $casts = [
        'trainer_names' => 'array'
    ];
}
