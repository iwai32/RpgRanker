<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class CharacterSkillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('character_skills')->truncate();
        DB::table('character_skills')->insert([
            [
                'character_id' => 1,
                'name' => '渾身の一刀',
                'power' => 140,
                'attribute' => 'slash',
                'type' => 'special',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 1,
                'name' => '剣舞',
                'power' => 140,
                'attribute' => 'slash',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 1,
                'name' => '雷鳴斬',
                'power' => 140,
                'attribute' => 'thunder',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 1,
                'name' => '地砕き',
                'power' => 90,
                'attribute' => 'blow',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 2,
                'name' => '百裂拳',
                'power' => 160,
                'attribute' => 'blow',
                'type' => 'special',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 2,
                'name' => '正拳突き',
                'power' => 140,
                'attribute' => 'blow',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 2,
                'name' => '爆炎脚',
                'power' => 140,
                'attribute' => 'flame',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 2,
                'name' => '真空波',
                'power' => 100,
                'attribute' => 'slash',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 3,
                'name' => '凍える吹雪',
                'power' => 160,
                'attribute' => 'ice',
                'type' => 'special',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 3,
                'name' => '氷撃',
                'power' => 120,
                'attribute' => 'ice',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 3,
                'name' => '乱風刃',
                'power' => 120,
                'attribute' => 'slash',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 3,
                'name' => '石の弾丸',
                'power' => 120,
                'attribute' => 'blow',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 4,
                'name' => '聖一閃',
                'power' => 160,
                'attribute' => 'holy',
                'type' => 'special',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 4,
                'name' => '滅魔斬',
                'power' => 80,
                'attribute' => 'holy',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 4,
                'name' => '紫電',
                'power' => 80,
                'attribute' => 'thunder',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'character_id' => 4,
                'name' => '炎槍',
                'power' => 70,
                'attribute' => 'flame',
                'type' => 'normal',
                'created_at' => $now,
                'updated_at' => $now
            ]
        ]);
    }
}
