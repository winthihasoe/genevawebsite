<?php

namespace Database\Seeders;

use App\Models\Caregiver;
use App\Models\Customer;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // Caregiver::factory(10)->create();
        Customer::factory(10)->create();
    }
}
