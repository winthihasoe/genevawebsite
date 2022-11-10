<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            // personal information
            $table->string('name');
            $table->string('nrc')->nullable();
            $table->integer('age');
            $table->string('father_name');
            $table->string('gender');
            $table->integer('weight');
            $table->float('height', 2, 1);
            $table->string('address');
            $table->string('phone');
            $table->string('image');

            // class information
            $table->string('class');
            $table->tinyInteger('batch')->nullable();
            $table->string('join_date')->nullable();
            $table->integer('1st_payment');
            $table->integer('2nd_payment')->nullable();
            $table->integer('3rd_payment')->nullable();
            $table->string('branch');
            $table->boolean('is_certificate_achived')->default(false);
            $table->string('certificate_number')->nullable();
            $table->timestamp('student_created_at')->useCurrent();

            // add by trainer 
            $table->foreignId('user_id')->constrained();
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
        Schema::dropIfExists('students');
    }
}
