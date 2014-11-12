<?php

include_once('functions.php');
include_once('handlers/preprocess.php');

init();

$args = args();
$section = '';

  switch ($args[0]) {
    case 'news-page':
      $section = 'news-page';
      break;
    case 'section':
      $section = 'section';
      break;
    case 'main':
    default:
      $section = 'main';
      break;
  }

// Load the handler.
if (!empty($section)) {
  include 'handlers/' . $section . '.php';
}
