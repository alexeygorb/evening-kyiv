<?php

// Load page template.
$page = array(
  'content' => template('content-handbook', array()),
);

print template('page', $page);
