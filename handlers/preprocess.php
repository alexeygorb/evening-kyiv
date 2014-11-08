<?php

function preprocess_page(&$vars) {
  $header_render = array();
  $vars['header'] = template('header', $header_render);

  $footer_render = array();
  $vars['footer'] = template('footer', $footer_render);

  global $section;
  $vars['body_class'] = array();
  $vars['body_class'][] = 'page-' . $section;

  $vars['body_class'] = implode(' ', $vars['body_class']);
}


function preprocess_header(&$vars) {
  $header_news_vars = array();
  $vars['header_news'] = template('header-news', $header_news_vars);
}
