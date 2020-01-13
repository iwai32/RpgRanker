<?php

namespace App\Services;

use App\Repository\Character\CharacterRepositoryInterface;
use App\Repository\Monster\MonsterRepositoryInterface;

class BattleService
{
  protected $characters;
  protected $monsters;

  public function __construct(CharacterRepositoryInterface $characterRepository, MonsterRepositoryInterface $monsterRepository)
  {
    $this->characters = $characterRepository;
    $this->monsters = $monsterRepository;
  }

  public function searchCharacter($id)
  {
    return $this->characters->battleCharacterForId($id);
  }

  public function searchRandomMonster()
  {
    return $this->monsters->getRandomMonster();
  }

  public function searchSatan()
  {
    return $this->monsters->descendSatan();
  }

  public function myAttack($battleData)
  {
    $inspection = $this->characters->inspectSkillData($battleData['character']);
    $myAttackResult =  $this->damageCalculation($battleData);

    //リクエスト内容が正しく取得できていれば結果を返す
    if ($inspection) {
      return $myAttackResult;
    }

  }

  public function damageCalculation($battleData)
  {
    $characterData = $battleData['character'];
    $weaknesses = [];
    $attackDamage = null;
    $monsterWeak = $battleData['monster']['weak'];

    //モンスターの弱点を格納
    foreach ($monsterWeak as $weakValue) {
      $weaknesses[] = $weakValue['name'];
    }

    if (in_array($characterData['attribute'], $weaknesses)) {
      //弱点の場合
      $attackDamage = $characterData['damage'] * 2;
    } else {
      $attackDamage = $characterData['damage'];
    }
    //    攻撃にランダム性を与える
    return $attackDamage += rand(0, 10);
  }

  //敵の攻撃をランダムに決める
  public function attackDrawing($monsterId)
  {
    $monsterData = $this->monsters->selectMonster($monsterId);

    $monsterName = $monsterData['name'];
    //モンスターが使用するスキルをランダムにする
    $monsterSkill = $monsterData['skills'][rand(0, 3)];
    //モンスターが与えるダメージをランダムにする
    $damageResult = $monsterSkill['power'] + rand(0, 10);

    return compact('monsterName', 'monsterSkill', 'damageResult');
  }
}
