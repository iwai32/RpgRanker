<?php

namespace App\Http\Controllers\Rpg;

use App\Http\Controllers\Controller;
use App\Models\Character;
use App\Models\Monster;
use Illuminate\Http\Request;

class BattleController extends Controller
{
    protected $characters;
    protected $monsters;

    public function __construct(Character $character, Monster $monster)
    {
        $this->characters = $character;
        $this->monsters = $monster;
    }

    public function getBattleCharacter(Request $request)
    {
        $id = $request->input('id');
        return $this->characters->battleCharacterForId($id);
    }

    public function getBattleMonsterList()
    {
        return $this->monsters->getBattleMonsterList();
    }

}
