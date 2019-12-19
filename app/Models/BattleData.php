<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BattleData extends Model
{
    protected $fillable = [
        'user_id',
        'character_id',
        'monster_count',
        'total_turn',
        'total_damage'
    ];
}
