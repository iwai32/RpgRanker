<?php

namespace App\Http\Controllers\Rpg;


use App\Http\Controllers\Controller;
use App\Services\BattleService;
use Illuminate\Http\Request;

class BattleController extends Controller
{
    protected $battleService;

    public function __construct(BattleService $battleService)
    {
        $this->battleService = $battleService;
    }

    public function getBattleCharacter(Request $request)
    {
        return $this->battleService->searchCharacter($request->input('id'));
    }

    public function getRandomMonster()
    {
        return $this->battleService->searchRandomMonster();
    }

    public function getSatan()
    {
        return $this->battleService->searchSatan();
    }

    public function useSkill(Request $request)
    {
        $batttleData = $request->all();
        $myAttackResult = $this->battleService->myAttack($batttleData);
        return compact('myAttackResult');
    }

    public function enemyAttack(Request $request)
    {
        $monsterId = $request->input('monsterId');
        return $this->battleService->attackDrawing($monsterId);
    }

}
