<?php

// Load page template.
$page = array(
  'content' => template('content-tag', array()),
);

print template('page', $page);
