<?php

// Load page template.
$page = array(
  'content' => template('content-events', array()),
);

print template('page', $page);
