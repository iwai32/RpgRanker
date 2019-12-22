<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{ config('app.name') }}</title>
  <meta name="author" content="KouheiIwai">
  <meta name="description" content="RpgRankerは好きなキャラクターを選んでモンスターを倒し、倒したスコアでランキングを競うゲームです。敵の弱点を見つけ、効率よく倒すのが高スコアのコツ！">
  <meta name="keywords" content="Rpg,SPA,ポートフォリオ,ランキング,勇者,魔王,暇つぶし">
  <!--scripts-->
  <script src="{{ asset('/js/app.js') }}" defer></script>
  <!--styles-->
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
  <!-- OGP -->
  <meta property="og:url" content="ページのURL"/>
  <meta property="og:title" content="RpgRanker"/>
  <meta property="og:type" content="website">
  <meta property="og:description" content="RpgRankerは好きなキャラクターを選んでモンスターを倒し、倒したスコアでランキングを競うゲームです。敵の弱点を見つけ、効率よく倒すのが高スコアのコツ！"/>
  <meta property="og:image" content="{{ asset('/images/ogp_image.png') }}"/>
  <!-- ファビコン -->
  <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}">
</head>
<body>
  <div id="app">
  </div>
</body>
</html>