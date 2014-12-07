<?php

// Load page template.
$page = array(
  'content' => template('content-vote', array()),
);

print template('page', $page);
