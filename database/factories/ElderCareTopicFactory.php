<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ElderCareTopicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'topic' => $this->faker->name(),
        ];
    }
}
