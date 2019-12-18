<?php

namespace App\Http\Controllers\Rpg;

use App\Http\Controllers\Controller;
use App\Models\Character;
use Illuminate\Http\Request;

class GameController extends Controller
{
    protected $characters;
    protected $characterSkills;

    public function __construct(Character $character)
    {
        $this->characters = $character;
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
}
