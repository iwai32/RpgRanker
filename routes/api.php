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
Route::get('/character-list', 'Rpg\GameController@getCharacterList')->name('characterList');
//バトルエリア
Route::get('/battle-character', 'Rpg\GameController@getBattleCharacter')->name('battleCharacter');
Route::get('/battle-monster', 'Rpg\GameController@getBattleMonsterList')->name('battleMonsterList');
Route::post('/save-battle-data', 'Rpg\GameController@saveBattleData')->name('saveBattleData');
//ランキング
Route::get('/ranking', 'Rpg\GameController@getRankingData')->name('getRankingData');

