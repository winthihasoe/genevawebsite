<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CaregiverFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name'=>$this->faker->name(),
            'age'=>$this->faker->numberBetween(18, 30),
            'weight'=>$this->faker->numberBetween(100, 170),
            'height'=>$this->faker->numberBetween(130, 170),
            'address'=>$this->faker->address(),
            'join_date'=>$this->faker->date(),
            'level'=>$this->faker->text(5), 
            'phone'=>$this->faker->phoneNumber(),
            // 'skills'=>$this->faker->array(['personal care', 'swaddling', 'bottle feeding'])
        ];
    }
}
