<?php

// Load page template.
$page = array(
  'content' => template('content-report', array()),
);

print template('page', $page);
