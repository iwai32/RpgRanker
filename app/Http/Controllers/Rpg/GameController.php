<?php

namespace App\Http\Controllers\Rpg;

use App\Http\Controllers\Controller;
use App\Models\Character;
use App\Models\Monster;
use App\Models\BattleData;
use Illuminate\Http\Request;

class GameController extends Controller
{
    protected $characters;
    protected $monsters;
    protected $battleDataLists;

    public function __construct(Character $character, Monster $monster, BattleData $battleData)
    {
        $this->characters = $character;
        $this->monsters = $monster;
        $this->battleDataLists = $battleData;
    }

    public function getCharacterList()
    {
        return $this->characters->with(['skills'])->get();
    }

    public function getBattleCharacter(Request $request)
    {
        $id = $request->input('id');
        return $this->characters->battleCharacterForId($id);
    }

    public function getBattleMonsterList()
    {
        return $this->monsters->with(['skills', 'weak'])->get();
    }

    public function saveBattleData(Request $request)
    {
        $inputs = $request->all();
        $this->battleDataLists->fill($inputs)->save();
    }
}
