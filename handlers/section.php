<?php

// Load page template.
$page = array(
  'content' => template('content-section', array()),
);

print template('page', $page);
