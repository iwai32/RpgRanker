<?php

namespace Tests\Unit;

use App\Models\Monster;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BattleMonsterListTest extends TestCase
{
    use RefreshDatabase;
    
    private $monster;

    public function setUp():void
    {
        parent::setUp();

        $this->monster = new Monster;
    }

    /**
     * @test
     */
    public function 登録されているモンスターを全件取得する()
    {
        factory(Monster::class, 5)->create();
        $monsters = $this->monster->get();

        $this->assertCount(5, $monsters);
    }
}
