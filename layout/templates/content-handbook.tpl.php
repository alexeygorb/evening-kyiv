<div class="section-wrapper">
  <div class="section-inner">
    <div class="section-main sidebar-right">
      <div class="section-content">

        <!-- The NEWS CONTENT itself -->
        <div class="content-sidebar-none-wrapper">
        <div class="content-sidebar-none">
          <div class="search-block">
            <form id="search-block-form" method="post" action="./">
              <input type="text" name="search" value="" />
            </form>
          </div>
          <ul class="add-menu">
            <li><a href="#" class="event">добавить событие</a></li>
            <li><a href="#popup-company-form" class="company fancybox">добавить компанию</a></li>
            <li><a href="#" class="place">добавить место</a></li>
            <li><a href="#" class="ad">добавить объявление</a></li>
          </ul>

          <div class="map-wrapper">
            <div id="map" <?php print !empty($args[1]) ? 'class="shrink"' : ''; ?>></div>
          </div>

          <div id="popup-company-form" class="popup-wrapper" style="display: none;"><div class="popup-inner">
            <div class="header"><h3>Добавить компанию</h3></div>
            <div class="content">
              <div class="form-wrapper">
                <form action="/" id="company-add-form" method="POST">
                  <div class="form-item clearfix">
                    <label for="edit-company-name">Название компании</label>
                    <input type="text" name="company-name" id="edit-company-name" value="" class="form-text" />
                  </div>
                  <div class="form-item clearfix">
                    <label for="edit-company-address">Почтовый адрес (улица и № дома)</label>
                    <textarea name="company-address" id="edit-company-address" rows="3"></textarea>
                  </div>
                  <div class="form-item clearfix">
                    <label for="edit-company-phone">Телефон</label>
                    <input type="text" name="company-phone" id="edit-company-phone" />
                  </div>
                  <div class="form-item clearfix">
                    <label for="edit-company-mail">E-mail компании</label>
                    <input type="text" name="company-mail" id="edit-company-mail" />
                  </div>
                  <div class="form-item clearfix">
                    <label for="edit-company-site">Сайт</label>
                    <input type="text" name="company-site" id="edit-company-site" />
                  </div>
                  <div class="form-item clearfix">
                    <label for="edit-company-industry">Сфера деятельности</label>
                    <select name="company-industry">
                      <option value="1">Название сферы деятельности</option>
                      <option value="1">Название сферы деятельности</option>
                      <option value="1">Название сферы деятельности</option>
                      <option value="1">Название сферы деятельности</option>
                    </select>
                  </div>
                  <div class="form-item clearfix">
                    <label for="edit-company-notes">Дополительная информация</label>
                    <textarea name="company-notes" id="edit-company-notes" rows="3"></textarea>
                  </div>
                  <div class="form-submit clearfix">
                    <button type="submit" name="submit" value="company-add">Отправить</button>
                    <p>Нажимая кнопку «Отправить», вы соглашаетесь с
                      условиями <a href="/">Соглашения о конфиденциальности</a></p>
                  </div>
                </form>
              </div>
            </div>
          </div></div>
        </div>
        </div>

      </div>

      <!-- BANNER section -->
      <div class="banner b720">
        <a href="/"><img src="http://dummyimage.com/720x90/dadada/ffffff.png" /></a>
      </div>

      <div class="front-news-content">
        <h3>Сейчас на главной</h3>
        <!-- THREE LATEST NEWS section -->
        <div class="news-latest-3 clearfix">

          <article class="latest">
            <div class="article-image">
              <a href="/"><img src="/content/image-mid4.jpg" width="240" height="120"/></a>
            </div>
            <div class="article-text">
              <div class="section-name">Столица</div>
              <h3 class="title"><a href="/">Неизвестные накрасили ногти на ногах Статуи Свободы</a></h3>
              <div class="summary">
                <p>Неизвестные накрасили ногти на ногах Статуи Свободы. Как рассказали сотрудники музея, ногти сатира раскрасили розовым лаком пришедшие в парк дети</p>
              </div>
              <div class="published">28 октября 2014</div>
            </div>
          </article>
          <article class="latest">
            <div class="article-image">
              <a href="/"><img src="/content/image-mid5.jpg" width="240" height="120"/></a>
            </div>
            <div class="article-text">
              <div class="section-name">Свинский рейтинг</div>
              <h3 class="title"><a href="/">ГПУ завершила расследование растраты 12 млн грн</a></h3>
              <div class="summary">
                <p>Генеральная прокуратура (ГПУ) завершила досудебное расследование в уголовном производстве по факту хищения государственных средств должностными лицами.</p>
              </div>
              <div class="published">28 октября 2014</div>
            </div>
          </article>
          <article class="latest">
            <div class="article-image">
              <a href="/"><img src="/content/image-mid6.jpg" width="240" height="120"/></a>
            </div>
            <div class="article-text">
              <div class="section-name">Репортаж</div>
              <h3 class="title"><a href="/">Украина потребует от сепаратистов свое</a></h3>
              <div class="summary">
                <p>Министерство энергетики и угольной промышленности планирует в ближайшее время осуществить поставки 2 млн т угля с подконтрольных сепаратистам территорий.</p>
              </div>
              <div class="published">28 октября 2014</div>
            </div>
          </article>
        </div>
      </div>

    </div>

    <!-- SIDEBAR RIGHT -->
    <aside class="sidebar-right">
      <div class="inner">

        <!-- Quote -->
        <article class="quoted clearfix">
          <div class="image"><a href="/"><img src="/content/horosh.jpg" width="87" height="85" /></a></div>
          <div class="name">Валерий Хорошковский</div>
          <div class="text"><a href="/">«Третью революцию страна не переживет»</a></div>
        </article>

        <div class="handbook-navigation">
          <div class="handbook-logo">&nbsp;</div>
          <h2 class="section-title">Справочник</h2>
          <?php if (empty($args[1])): ?>
            <div class="handbook-wrapper"><div class="handbook-wrapper-inner">
                <ul>
                  <li><a href="#">Аварийные службы, ЖКХ</a>
                    <ul><li><a href="/">Аварийные службы (2)</a></li><li><a href="/">ЖКХ (81)</a></li></ul>
                  </li>
                  <li><a href="#">Атомобили, автосервис</a>
                    <ul><li><a href="/">Атомобили (23)</a></li><li><a href="/">Автосервис (73)</a></li></ul>
                  </li>
                  <li><a href="#">Банки, страхование</a>
                    <ul><li><a href="/">Банки (23)</a></li><li><a href="/">Страхование (73)</a></li></ul>
                  </li>
                  <li><a href="#">Власть, силовые структуры</a>
                    <ul><li><a href="/">Власть (23)</a></li><li><a href="/">Силовые структуры (73)</a></li></ul>
                  </li>
                  <li><a href="#">Гостиницы, Хостелы</a>
                    <ul><li><a href="/">Гостиницы (34)</a></li><li><a href="/">Хостелы (34)</a></li></ul>
                  </li>
                  <li><a href="#">Животные, ветеринария</a>
                    <ul><li><a href="/">Животные (34)</a></li><li><a href="/">ветеринария (34)</a></li></ul>
                  </li>
                  <li><a href="/">За городом</a></li>
                  <li><a href="/">Кафе, бары, рестораны</a></li>
                  <li><a href="/">Красота, здоровье</a></li>
                  <li><a href="/">Медицина</a></li>
                  <li><a href="/">Оразование, наука</a></li>
                  <li><a href="/">Отдых, развлечения</a></li>
                  <li><a href="/">Прокат, аренда</a></li>
                </ul>
              </div></div>
          <?php else: ?>
            <h3>Гостиницы, хостелы</h3>
            <div class="selected-category">
              <h4>Гостиницы (34)</h4>
            </div>
            <div class="handbook-wrapper"><div class="handbook-wrapper-inner">
                <ul>
                  <li><a href="./">Название №1</a></li>
                  <li><a href="./">Название №2</a></li>
                  <li><a href="./">Название №3</a></li>
                  <li><a href="./">Название №4</a></li>
                  <li><a href="./">Название №5</a></li>
                  <li><a href="./">Название №6</a></li>
                  <li><a href="./">Название №7</a></li>
                  <li><a href="./">Название №8</a></li>
                  <li><a href="./">Название №9</a></li>
                  <li><a href="./" class="active">Название №10</a></li>
                  <li><a href="./">Название №11</a></li>
                  <li><a href="./">Название №12</a></li>
                  <li><a href="./">Название №13</a></li>
                  <li><a href="./">Название №14</a></li>
                  <li><a href="./">Название №15</a></li>
                  <li><a href="./">Название №16</a></li>
                  <li><a href="./">Название №17</a></li>
                  <li><a href="./">Название №18</a></li>
                </ul>
              </div></div>
          <?php endif; ?>

        </div>
      </div>
    </aside>
  </div>
</div>