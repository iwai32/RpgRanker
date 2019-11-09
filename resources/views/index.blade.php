<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>RpgRanker</title>
  <!--styles-->
  <link href="https://fonts.googleapis.com/css?family=Play&display=swap" rel="stylesheet">
  <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
  <div id="app">
  </div>
</body>
<script src="{{ mix('/js/app.js') }}"></script>
</html>