<div class="date-section">
  <h3 class="date"><span><?php print $day; ?></span> <?php print $day_text; ?></h3>
  <div class="events-list">
    <div class="events-list clearfix">
      <article class="event">
        <div class="article-image">
          <a href="/"><img src="/content/image-square1.jpg" width="136" height="136"/></a>
        </div>
        <div class="content">
          <div class="section-name">Концерт</div>
          <h3 class="title"><a href="/">Марчело Бурлон в Карабас Бар</a></h3>
          <div class="venue">Центральный Дом Художника</div>
          <div class="status"><a href="#">Пойти</a> <span>14</span></div>
        </div>
      </article>

      <article class="event">
        <div class="article-image">
          <a href="/"><img src="/content/image-square2.jpg" width="136" height="136"/></a>
        </div>
        <div class="content">
          <div class="section-name">Выставка</div>
          <h3 class="title"><a href="/">Ногу Свело в Дворце Спорта</a></h3>
          <div class="venue">Арт-кафе «Гей-Гоп»</div>
          <div class="status"><a href="#" class="active">Я иду!</a> <span>124</span></div>
        </div>
      </article>

      <article class="event">
        <div class="article-image">
          <a href="/"><img src="/content/image-square3.jpg" width="136" height="136"/></a>
        </div>
        <div class="content">
          <div class="section-name">Концерт</div>
          <h3 class="title"><a href="/">Марчело Бурлон в Карабас Бар</a></h3>
          <div class="venue">Центральный Дом Художника</div>
          <div class="status"><a href="#">Пойти</a> <span>14</span></div>
        </div>
      </article>
<?php if (mt_rand(0, 1)): ?>
      <article class="event">
        <div class="article-image">
          <a href="/"><img src="/content/image-square4.jpg" width="136" height="136"/></a>
        </div>
        <div class="content">
          <div class="section-name">Выставка</div>
          <h3 class="title"><a href="/">Ногу Свело в Дворце Спорта</a></h3>
          <div class="venue">Арт-кафе «Гей-Гоп»</div>
          <div class="status"><a href="#" class="active">Я иду!</a> <span>124</span></div>
        </div>
      </article>

      <article class="event">
        <div class="article-image">
          <a href="/"><img src="/content/image-square5.jpg" width="136" height="136"/></a>
        </div>
        <div class="content">
          <div class="section-name">Концерт</div>
          <h3 class="title"><a href="/">Марчело Бурлон в Карабас Бар</a></h3>
          <div class="venue">Центральный Дом Художника</div>
          <div class="status"><a href="#" class="active">Я иду!</a> <span>14</span></div>
        </div>
      </article>
<?php endif; ?>
    </div>
  </div>
</div>