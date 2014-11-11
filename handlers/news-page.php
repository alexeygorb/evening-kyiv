<?php

// Load page template.
$page = array(
  'content' => template('content-news', array()),
);

print template('page', $page);
