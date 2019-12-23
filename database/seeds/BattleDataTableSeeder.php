<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class BattleDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('battle_data')->truncate();
        DB::table('battle_data')->insert([
            [
                'user_id' => 1,
                'character_id' => 1,
                'monster_count' => 140,
                'total_turn' => 22,
                'total_damage' => 22,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ]);
    }
}
