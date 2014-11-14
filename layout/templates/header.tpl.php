<div class="header-inner">
  <div class="top-line">
    <div class="time"><?php print date('j F, l'); ?></div>
    <ul class="social">
      <li class="vk"><a href="#" title="vKontakte">vKontakte</a></li>
      <li class="twitter"><a href="#" title="Twitter">Twitter</a></li>
      <li class="gplus"><a href="#" title="Google Plus">Google Plus</a></li>
      <li class="fb"><a href="#" title="Facebook">Facebook</a></li>
      <li class="youtube"><a href="#" title="Youtube">Youtube</a></li>
      <li class="pdf"><a href="#">PDF версия</a></li>
      <li class="rss"><a href="#">RSS лента</a></li>
    </ul>
  </div>

  <h1 class="logo"><a href="/"><img src="/layout/images/logo.png" title="Вечерний Киев" /></a></h1>

  <?php print $header_news;

  $colors = array('red', 'yellow', 'green');
  $ran_key = array_rand($colors);
  $color = $colors[$ran_key];
  ?>

  <div id="header-icons">
    <div class="emo-link"><a href="/">Emo</a></div>
    <div class="weather"><a href="/"></a> -23°</div>
    <div class="traffic"><a href="/" class="<?php print $color; ?>">2</a> балла</div>
    <div class="piggy"><a href="/"></a></div>
  </div>

  <ul id="menu-secondary">
    <li><a href="/">События</a></li>
    <li><a href="/">Места</a></li>
    <li><a href="/">Справочник</a></li>
    <li class="search"><a href="/">Поиск</a></li>
  </ul>

  <nav id="main-menu">
    <ul><li><a href="/">Столица</a></li><li><a href="/">Репортаж</a></li><li><a href="/">Точка зрения</a></li><li><a href="/">Топ рейтинги</a></li><li><a href="/">5 вопросов чиновнику</a></li><li><a href="/">Потребитель</a></li></ul>
  </nav>
  <nav id="emo-tags" class="hidden">
    <h3>Выбирай статьи по настроению:</h3>
        <a href="/">тег</a>
        <a href="/">еще один</a>
        <a href="/">ха-ха</a>
        <a href="/">няшно</a>
        <a href="/">фу</a>
        <a href="/">упс</a>
        <a href="/">о боже!</a>
  </nav>
</div>