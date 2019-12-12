<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class CharactersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $now = Carbon::now();

        DB::table('characters')->truncate();
        DB::table('characters')->insert([
            [
                'name' => '剣士',
                'pass' => 'swords-man',
                'profile' => '剣術に長け、数多の剣技で敵を切り裂く。冷静沈着に相手の行動を見極め、常に上手を行く立ち回りをする。',
                'hp' => 460,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '武闘家',
                'pass' => 'worrior',
                'profile' => '肉体を武器とし、素早い身のこなしと体術で相手を翻弄する。自分より強い相手と戦うことを求めている。',
                'hp' => 440,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '魔法使い',
                'pass' => 'witch',
                'profile' => '魔力を駆使して敵を倒す氷呪文が得意な魔法使い。不死の呪いにかかっており、呪いを解く方法を探している。',
                'hp' => 400,
                'created_at' => $now,
                'updated_at' => $now
            ],
            [
                'name' => '勇者',
                'pass' => 'brave',
                'profile' => '生まれ持った才能と、勇敢さをもって敵と戦う。自身の出生の秘密と故郷を滅ぼした魔王を倒すため旅をしている。',
                'hp' => 420,
                'created_at' => $now,
                'updated_at' => $now
            ]
        ]);
    }
}
