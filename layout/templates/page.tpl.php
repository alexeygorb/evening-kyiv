<!DOCTYPE html>
<html lang="en-US">
<head>
  <title>Вечерний Киев</title>
  <meta charset="UTF-8"/>
  <link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700&subset=cyrillic,cyrillic-ext,latin' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="/layout/css/style.css"/>
  <link rel="stylesheet" type="text/css" href="/layout/css/jquery-ui.min.css"/>
  <link rel="stylesheet" type="text/css" href="/layout/css/jquery.mCustomScrollbar.css"/>
  <?php if (!empty($args[0]) && $args[0] == 'report-page'): ?>
    <link rel="stylesheet" type="text/css" href="/layout/css/carousel.css"/>
  <?php endif; ?>
  <script type="text/javascript" src="/layout/js/jquery-1.11.1.min.js"></script>
  <script type="text/javascript" src="/layout/js/jquery.once.min.js"></script>
  <script type="text/javascript" src="/layout/js/jquery.jcarousel.min.js"></script>
  <script type="text/javascript" src="/layout/js/jquery-ui.min.js"></script>
  <script type="text/javascript" src="/layout/js/jquery.ui.datepicker-ru.js"></script>
  <script type="text/javascript" src="/layout/js/jquery.equalizer.min.js"></script>
  <script type="text/javascript" src="/layout/js/jquery.mCustomScrollbar.concat.min.js"></script>
  <script type="text/javascript" src="/layout/js/scripts.js"></script>
  <?php if (!empty($args[0]) && $args[0] == 'report-page'): ?>
    <script type="text/javascript" src="/layout/js/carousel.js"></script>
  <?php endif; ?>
  <?php if (!empty($args[0]) && $args[0] == 'handbook'): ?>
    <script type="text/javascript" src="/layout/js/map.js"></script>
    <script type="text/javascript"
            src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDJECpGnsZLOwuc2Ahiakmc8tG37Di0iwE&sensor=TRUE">
    </script>

  <?php endif; ?>

</head>
<body class="<?php print $body_class; ?>">
<div id="content-wrapper">
  <header><?php print $header; ?></header>
  <div id="content"><?php print $content; ?></div>
  <footer><?php print $footer; ?></footer>
</div>
</body>
</html>