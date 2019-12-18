<?php

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
        $this->call([
            CharactersTableSeeder::class,
            CharacterSkillsTableSeeder::class,
            MonstersTableSeeder::class,
            MonsterSkillsTableSeeder::class,
            AttributesTableSeeder::class,
            WeaknessesTable::class
        ]);
    }
}
