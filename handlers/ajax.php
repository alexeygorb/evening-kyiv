<?php

$args = args();
$section = !empty($args[1]) ? $args[1] : '';
if ($section == 'news') {
  // Load page template.
  print template('content-news-feed', array( 'exclude_banner' => TRUE ));
}

if ($section == 'events') {
  $date = $args[2];
  $new_date = strtotime('+1 day', strtotime($date));
  print json_encode(array(
    'content' => template('content-events-feed', array('day' => date('j', $new_date), 'day_text' => date('F, l', $new_date))),
    'date' => date('Y-m-d', $new_date),
  ));
}
