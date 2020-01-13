<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::namespace('Auth')->group(function() {
  //会員登録
  Route::post('/register', 'RegisterController@register')->name('register');
  //ログイン
  Route::post('/login', 'LoginController@login')->name('login');
  //ログアウト
  Route::post('/logout', 'LoginController@logout')->name('logout');
  //ログインユーザー
  Route::get('/user', function() {
    return Auth::user();
  })->name('user');
});


Route::namespace('Rpg')->group(function() {
  //キャラクターセレクト
  Route::get('/character-list', 'CharacterSelectController@getCharacterList')->name('characterList');
  //バトルエリア
  Route::get('/battle-character', 'BattleController@getBattleCharacter')->name('battleCharacter');
  Route::get('/battle-monster', 'BattleController@getRandomMonster')->name('randomBattleMonster');
  Route::get('/battle-satan', 'BattleController@getSatan')->name('battleSatan');
  Route::post('/use-skill', 'BattleController@useSkill')->name('useSkill');
  Route::post('/enemy-attack', 'BattleController@enemyAttack')->name('enemyAttack');
  //ランキング
  Route::post('/save-battle-data', 'RankingController@saveBattleData')->name('saveBattleData');
  Route::get('/ranking', 'RankingController@getRankingData')->name('getRankingData');
});

