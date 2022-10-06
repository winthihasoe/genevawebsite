<?php

namespace Database\Seeders;

use App\Models\Caregiver;
use App\Models\ElderCareTopic;
use App\Models\User;
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
        User::factory(10)->create();
        Caregiver::factory()->count(10)->create();
        ElderCareTopic::factory(2)->create();
    }
}
