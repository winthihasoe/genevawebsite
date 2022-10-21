<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDutiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('duties', function (Blueprint $table) {
            $table->id();
            // ------- from bookings table -----------
            $table->foreignId('user_id')->constrained(); // info for who created this duty
            $table->string('patient_name');
            $table->string('address');
            $table->string('city');
            $table->string('phone');
            $table->string('start_date');
            $table->string('end_date')->nullable();
            $table->string('care');
            $table->string('duty');
            $table->string('caregiver_photo')->nullable();
            $table->timestamp('duty_started_at')->useCurrent(); // Duty started date
            $table->string('booking_created_at');

            // ------- from booking_details table -----------
            $table->foreignId('caregiver_id')->constrained('caregivers');
            $table->string('name');
            $table->integer('patient_age');
            $table->string('needs');
            $table->string('level');
            $table->integer('price');
            $table->integer('duties')->nullable();
            $table->string('note_to_caregiver')->nullable();

            $table->boolean('is_complete')->default(false);
            $table->timestamp('created')->useCurrent();
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
        Schema::dropIfExists('duties');
    }
}
