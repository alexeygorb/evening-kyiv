<?php

$args = args();
$section = !empty($args[1]) ? $args[1] : '';
if ($section == 'news') {
  // Load page template.
  print template('content-news-feed', array( 'exclude_banner' => TRUE ));
}
