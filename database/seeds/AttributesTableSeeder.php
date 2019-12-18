<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class AttributesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('attributes')->truncate();
        DB::table('attributes')->insert([
            [
                'name' => 'slash',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'blow',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'thunder',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'ice',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'flame',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'holy',
                'created_at' => $now,
                'updated_at' => $now
            ]
        ]);
    }
}
