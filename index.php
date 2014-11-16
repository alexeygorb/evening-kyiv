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
    case 'events-page':
      $section = 'events-page';
      break;
    case 'tag-page':
      $section = 'tag-page';
      break;
    case 'section':
      $section = 'section';
      break;
    case 'report-page':
      $section = 'report-page';
      break;
    case 'svin-page':
      $section = 'svin-page';
      break;
    case 'ajax':
      $section = 'ajax';
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
