<?php

namespace App\Http\Controllers\Rpg;

use App\Http\Controllers\Controller;
use App\Models\Character;
use Illuminate\Http\Request;

class CharacterSelectController extends Controller
{
    protected $characters;

    public function __construct(Character $character)
    {
        $this->characters = $character;
    }

    public function getCharacterList()
    {
        return $this->characters->getCharacterList();
    }
}
