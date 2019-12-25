<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Character extends Model
{
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function skills()
    {
        return $this->hasMany('App\Models\CharacterSkill', 'character_id', 'id');
    }

    public function fetchSkills()
    {
        return $this->with(['skills']);
    }

    public function getCharacterList()
    {
        return $this->fetchSkills()->get();
    }

    public function battleCharacterForId($id)
    {
        return $this->with(['skills'])->find($id);
    }
}
