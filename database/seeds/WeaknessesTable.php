<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class WeaknessesTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('weaknesses')->truncate();
        DB::table('weaknesses')->insert([
            [
                'monster_id' => 1,
                'attribute_id' => 6,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 2,
                'attribute_id' => 2,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 2,
                'attribute_id' => 3,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 3,
                'attribute_id' => 3,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 3,
                'attribute_id' => 1,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 4,
                'attribute_id' => 4,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 4,
                'attribute_id' => 6,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 5,
                'attribute_id' => 1,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 5,
                'attribute_id' => 3,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 5,
                'attribute_id' => 4,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 6,
                'attribute_id' => 4,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 6,
                'attribute_id' => 5,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 7,
                'attribute_id' => 5,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 7,
                'attribute_id' => 6,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 8,
                'attribute_id' => 5,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 8,
                'attribute_id' => 6,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ]);
    }
}
