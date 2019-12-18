<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class MonsterSkillsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();
        DB::table('monster_skills')->truncate();
        DB::table('monster_skills')->insert([
            [
                'monster_id' => 1,
                'name' => '悪の波動',
                'power' => 120,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 1,
                'name' => '地獄の大鎌',
                'power' => 90,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 1,
                'name' => '闇一閃',
                'power' => 180,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 1,
                'name' => '邪悪な眼差し',
                'power' => 80,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 2,
                'name' => '地獄斬り',
                'power' => 90,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 2,
                'name' => '回転斬り',
                'power' => 60,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 2,
                'name' => '刺突',
                'power' => 70,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 2,
                'name' => '切り上げ',
                'power' => 80,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 3,
                'name' => '不浄の爪',
                'power' => 80,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 3,
                'name' => '炎の息',
                'power' => 60,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 3,
                'name' => '噛みつき',
                'power' => 40,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 3,
                'name' => '切り裂き',
                'power' => 60,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 4,
                'name' => '超爆発',
                'power' => 140,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 4,
                'name' => '炎獄握',
                'power' => 100,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 4,
                'name' => '火球',
                'power' => 60,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 4,
                'name' => '熱風',
                'power' => 40,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 5,
                'name' => '灼熱の息吹',
                'power' => 160,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 5,
                'name' => '喰いちぎる',
                'power' => 100,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 5,
                'name' => '咆哮',
                'power' => 60,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 5,
                'name' => '尻尾を振り回す',
                'power' => 40,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 6,
                'name' => '稲妻突き',
                'power' => 120,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 6,
                'name' => '突進',
                'power' => 100,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 6,
                'name' => '武器を振り回す',
                'power' => 80,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 6,
                'name' => '死の嘶き',
                'power' => 100,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 7,
                'name' => '死神の大鎌',
                'power' => 160,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 7,
                'name' => '八つ裂き',
                'power' => 120,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 7,
                'name' => '武器を振り回す',
                'power' => 80,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 7,
                'name' => '呪詛',
                'power' => 80,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 8,
                'name' => '死の息吹',
                'power' => 140,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 8,
                'name' => '不浄の爪',
                'power' => 80,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 8,
                'name' => '不意打ち',
                'power' => 40,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'monster_id' => 8,
                'name' => '呪詛',
                'power' => 80,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ]);
    }
}
