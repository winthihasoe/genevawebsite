<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->string('patient_name');
            $table->string('address');
            $table->string('city');
            $table->string('phone');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->string('care');
            $table->string('duty');
            $table->string('caregiver_photo')->nullable();
            $table->boolean('is_duty')->default(false); // Whether the duty is start or not
            $table->boolean('is_complete')->default(false); // Whether the case is complete or not
            $table->boolean('is_cancel')->default(false); // Whether the case is cancelled or not
            $table->timestamp('booking_created_at')->useCurrent();
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
        Schema::dropIfExists('bookings');
    }
}
