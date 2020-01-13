<?php

namespace App\Http\Controllers\Rpg;

use App\Http\Controllers\Controller;
use App\Models\BattleData;
use Illuminate\Http\Request;

class RankingController extends Controller
{
    protected $battleDataLists;

    public function __construct(BattleData $battleData)
    {
        $this->battleDataLists = $battleData;
    }

    public function saveBattleData(Request $request)
    {
        $inputs = $request->all();
        $this->battleDataLists->fill($inputs)->save();
    }

    public function getRankingData()
    {
        return $this->battleDataLists
            ->fetchPassAndNameForId()->sortForRanking()->paginate(10);
    }
}
