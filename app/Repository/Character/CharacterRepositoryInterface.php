<?php

namespace App\Repository\Character;


interface CharacterRepositoryInterface
{
  public function fetchSkills();

  public function getCharacterList();

  public function battleCharacterForId($id);

  public function inspectSkillData($skillData);
}