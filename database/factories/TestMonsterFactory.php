<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Monster;
use Faker\Generator as Faker;

$factory->define(Monster::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'pass' => $faker->firstName,
        'hp' => $faker->randomNumber(3),
        'field' => $faker->text(5)
    ];
});
