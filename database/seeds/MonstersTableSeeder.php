<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class MonstersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        DB::table('monsters')->truncate();
        DB::table('monsters')->insert([
            [
                'name' => '大魔王サタン',
                'pass' => 'satan',
                'hp' => 800,
                'field' => 'hell',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'ダークナイト',
                'pass' => 'dark-knight',
                'hp' => 420,
                'field' => 'tower',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'デーモン',
                'pass' => 'demon',
                'hp' => 440,
                'field' => 'tower',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'プロミネンス',
                'pass' => 'prominence',
                'hp' => 340,
                'field' => 'purgatory',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'イフリート',
                'pass' => 'ifrit',
                'hp' => 500,
                'field' => 'purgatory',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'デュラハン',
                'pass' => 'dullahan',
                'hp' => 480,
                'field' => 'hell',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'デス',
                'pass' => 'death',
                'hp' => 380,
                'field' => 'hell',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => 'ノスフェラン',
                'pass' => 'nospheran',
                'hp' => 420,
                'field' => 'hell',
                'created_at' => $now,
                'updated_at' => $now
            ],
        ]);
    }
}
