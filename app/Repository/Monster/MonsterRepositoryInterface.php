<?php

namespace App\Repository\Monster;

interface MonsterRepositoryInterface
{
  public function fetchSkillsAndWeak();

  public function getRandomMonster();

  public function descendSatan();

  public function selectMonster($monsterId);
}