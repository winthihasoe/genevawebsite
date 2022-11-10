<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;

    protected $fillable = [
        // personal information
        'name',
        'nrc',
        'age',
        'father_name',
        'gender',
        'weight',
        'height',
        'address',
        'phone',
        'image',

        // class information
        'class',
        'batch',
        'join_date',
        '1st_payment',
        '2nd_payment',
        '3rd_payment',
        'branch',
        'is_certificate_achived',
        'certificate_number',
    ];
}
