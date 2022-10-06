<?php

namespace App\Models;

use Database\Factories\ElderCareTopicFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ElderCareTopic extends Model
{
    use HasFactory;

    protected $fillable = ['topic'];

   
}
