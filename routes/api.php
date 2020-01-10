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

//会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');
//ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');
//ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');
//ログインユーザー
Route::get('/user', function() {
  return Auth::user();
})->name('user');
//キャラクターセレクト
Route::get('/character-list', 'Rpg\CharacterSelectController@getCharacterList')->name('characterList');
//バトルエリア
Route::get('/battle-character', 'Rpg\BattleController@getBattleCharacter')->name('battleCharacter');
Route::get('/battle-monster', 'Rpg\BattleController@getBattleMonsterList')->name('battleMonsterList');
//ランキング
Route::post('/save-battle-data', 'Rpg\RankingController@saveBattleData')->name('saveBattleData');
Route::get('/ranking', 'Rpg\RankingController@getRankingData')->name('getRankingData');

