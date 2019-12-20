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

    public function character()
    {
        return $this->belongsTo('App\Models\Character');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function fetchPassAndNameForId()
    {
        return $this->with(['character:pass,name,id', 'user:name,id']);
    }

    public function scopeSortForRanking($query)
    {
        return $query->orderBy('monster_count', 'desc')
            ->orderBy('total_turn')
            ->orderBy('total_damage', 'desc');
    }
}
