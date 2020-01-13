<?php

namespace App\Repository\Character;

use App\Models\Character;

class CharacterRepository implements CharacterRepositoryInterface
{
  protected $characters;

  public function __construct(Character $character)
  {
    $this->characters = $character;
  }

  public function fetchSkills()
  {
    return $this->characters->with(['skills']);
  }

  public function getCharacterList()
  {
    return $this->fetchSkills()->get();
  }

  public function battleCharacterForId($id)
  {
    return $this->characters->with(['skills'])->find($id);
  }

  //リクエスト内容が不正でないか検査する
  public function inspectSkillData($skillData)
  {
  //名前と、damageと属性とキャラクターidが一致したレコードを取得する
    $skillRecords = $this->characters->whereHas('skills', function($query) use($skillData) {
        $query->where('name', $skillData['name'])
            ->where('power', $skillData['damage'])
            ->where('attribute', $skillData['attribute']);
    })->first();

    return $skillRecords;
  }
}