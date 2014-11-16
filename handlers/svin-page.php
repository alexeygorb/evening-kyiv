<?php

// Load page template.
$page = array(
  'content' => template('content-pig', array()),
);

print template('page', $page);
