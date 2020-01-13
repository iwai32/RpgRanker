<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
    protected $hidden = [
        'created_at', 'updated_at'
    ];

    public function skills()
    {
        return $this->hasMany('App\Models\MonsterSkill', 'monster_id', 'id');
    }

    public function weak()
    {
        return $this->belongsToMany('App\Models\Attribute', 'weaknesses', 'monster_id', 'attribute_id');
    }
}
