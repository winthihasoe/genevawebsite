<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChildTraining extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'user_id',
        'post_image',
        'post_title',
        'post_body',
        'post_footer',
    ];
}
