<?php

include_once('functions.php');
include_once('handlers/preprocess.php');

init();

$args = args();
$section = 'main';

$pages = array(
  'ajax',
  'events-page',
  'handbook',
  'main',
  'news-page',
  'report-page',
  'section',
  'svin-page',
  'tag-page',
  'vote',
);

if (in_array($args[0], $pages)) {
  $section = $args[0];
}

// Load the handler.
if (!empty($section)) {
  include 'handlers/' . $section . '.php';
}
