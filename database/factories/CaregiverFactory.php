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
            'height'=>$this->faker->numberBetween(4.0, 6.0),
            'gender'=>'male',
            'address'=>$this->faker->address(),
            'location' => 'mdy',
            'phone' => $this->faker->phoneNumber(),
            'join_date'=>$this->faker->date(),
            'level'=>'skilled', 
            'care'=>'child',
            'skills' => ['Oxygen therapy', 'Diaper change', 'Personal Hygiene', 'Drip'],
            'image' =>'633bd8ca0a0ae_81166972.jpg',
        ];
    }
}
