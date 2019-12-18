<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attribute extends Model
{
    protected $hidden = [
        'created_at', 'updated_at', 'pivot'
    ];

    public function monsters()
    {
        return $this->belongsToMany('App\Models\Monster');
    }
}
