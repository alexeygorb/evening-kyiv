<?php

// Load page template.
$page = array(
  'content' => template('content-main', array()),
);

print template('page', $page);
