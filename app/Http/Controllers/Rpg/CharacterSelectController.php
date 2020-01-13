<?php

namespace App\Http\Controllers\Rpg;

use App\Http\Controllers\Controller;
use App\Repository\Character\CharacterRepositoryInterface;
use Illuminate\Http\Request;

class CharacterSelectController extends Controller
{
    protected $characters;

    public function __construct(CharacterRepositoryInterface $character)
    {
        $this->characters = $character;
    }

    public function getCharacterList()
    {
        return $this->characters->getCharacterList();
    }
}
