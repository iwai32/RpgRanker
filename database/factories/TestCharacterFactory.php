<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Character;
use Faker\Generator as Faker;

$factory->define(Character::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'pass' => $faker->firstName,
        'profile' => $faker->text(200),
        'hp' => $faker->randomNumber(3)
    ];
});
