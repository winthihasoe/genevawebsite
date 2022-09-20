<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCaregiversTable extends Migration
{
    public function up()
    {
        Schema::create('caregivers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('nrc')->nullable();
            $table->integer('age');
            $table->integer('weight');
            $table->float('height',4,1);
            $table->string('address');
            $table->string('location');
            $table->string('phone');
            $table->string('join_date')->nullable();
            $table->string('level');
            $table->string('care');
            $table->string('skills');
            $table->string('image');
            $table->tinyInteger('rating')->nullable();
            $table->string('review')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('caregivers');
    }
}
