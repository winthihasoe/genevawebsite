<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingDetailsTable extends Migration
{

    public function up()
    {
        
        Schema::create('booking_details', function (Blueprint $table) {
            $table->primary(['booking_id', 'caregiver_id']);
            $table->foreignId('booking_id')->constrained('bookings');
            $table->foreignId('caregiver_id')->constrained('caregivers');
            $table->integer('patient_age');
            $table->string('needs');
            $table->string('level');
            $table->integer('price');
            $table->integer('duties')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking_details');
    }
}
