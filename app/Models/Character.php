<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{

    public function skills()
    {
        return $this->hasMany('App\Models\CharacterSkill', 'character_id', 'id');
    }
}
