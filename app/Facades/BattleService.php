<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class BattleService extends Facade
{
  protected static function getFacadeAccessor()
  {
    return 'BattleService';
  }
}