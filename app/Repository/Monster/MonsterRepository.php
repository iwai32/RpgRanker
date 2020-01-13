<?php

namespace App\Repository\Monster;

use App\Models\Monster;

class MonsterRepository implements MonsterRepositoryInterface
{
  protected $monsters;

  public function __construct(Monster $monster)
  {
    $this->monsters = $monster;
  }

  public function fetchSkillsAndWeak()
  {
      return $this->monsters->with(['skills', 'weak']);
  }

  public function getRandomMonster()
  {
      $monsterCount = $this->monsters->count();
      return $this->fetchSkillsAndWeak()->where('id', rand(2, $monsterCount))->first();
  }

  public function descendSatan()
  {
      return $this->fetchSkillsAndWeak()->where('id', 1)->first();
  }

  public function selectMonster($monsterId)
  {
      $monsterData = $this->monsters->with(['skills'])
          ->where('id', $monsterId)->first();
          
      return $monsterData;
  }
}