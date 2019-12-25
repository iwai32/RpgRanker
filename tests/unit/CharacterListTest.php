<?php

namespace Tests\Unit;

use App\Models\Character;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GetCharacterList extends TestCase
{
    use RefreshDatabase;

    private $character;

    public function setUp():void
    {
        parent::setUp();
        $this->character = new Character;
    }

    /**
     * @test
     */
    public function 登録されているキャラクターを全件取得する()
    {
       factory(Character::class, 5)->create();
       $characters = $this->character->get();

       $this->assertCount(5, $characters);
    }

    /**
     * @test
     */
    public function 指定したIDのキャラクターを1件取得する()
    {
        $target = factory(Character::class)->create();
        $character = $this->character->battleCharacterForId($target->id);

        $this->assertSame($target->name, $character->name);

        //存在しないidをチェックする
        $nullCheck = $this->character->battleCharacterForId(9999);

        $this->assertNull($nullCheck);
    }
}
