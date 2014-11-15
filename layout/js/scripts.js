(function($) {

  var equalizeBlocks = function () {

    $('.news-latest-3,.news-latest-4').equalizer({columns: 'article'});
    $('.events-list').equalizer({columns: 'article'});
    $('.read-more-list').equalizer({columns: 'article'});
    $('.headlines .headline-row').equalizer({columns: '.headline'});

  };

  var searchBarInit = function () {

    var searchBar = $('#menu-secondary li.search');
    searchBar.addClass('collapsed');
    setTimeout(function() {searchBar.addClass('transition')}, 33);
    $('#menu-secondary li.search a').click(function (e) {
      e.preventDefault();
      searchBar.removeClass('collapsed');
    });

  };

  var emoMenuBehavior = function () {

    var emoMenu = $('#emo-tags');
    emoMenu.css('opacity', 0);
    $('.emo-link a').click(function(e) {
      e.preventDefault();
    });
    $('.emo-link a').mouseenter(function(e) {
      var emolink = $(this);
      var mainMenu = $('#main-menu');
      var emoMenu = $('#emo-tags');
      if (!emolink.hasClass('active')) {
        mainMenu.stop(true);
        mainMenu.animate({
          left: -500,
          opacity: 0
        }, function() {$(this).hide()});
        emoMenu.show();
        emoMenu.css({
          left: -500
        });
        emoMenu.stop(true);
        emoMenu.animate({
          left: 0,
          opacity: 1
        });
        emolink.addClass('active');
      }
    });
    $('header').mouseleave(function(e) {
      var emolink = $('.emo-link a');
      var mainMenu = $('#main-menu');
      var emoMenu = $('#emo-tags');

      if (emolink.hasClass('active')) {
        emoMenu.stop(true);
        emoMenu.animate({
          left: -500,
          opacity: 0
        }, function() {$(this).hide()});
        mainMenu.show();
        mainMenu.css({
          left: -500
        });
        mainMenu.stop(true);
        mainMenu.animate({
          left: 0,
          opacity: 1
        });
        emolink.removeClass('active');
      }
    });

  };

  var handBookInit = function() {
    $('.handbook-wrapper-inner').mCustomScrollbar();
    $('.handbook-wrapper a').click(function(e) {
      var link = $(this);
      if (link.attr('href') == '#') {
        e.preventDefault();
        var item = link.parent();
        var submenu = item.find('ul');
        if (submenu.length > 0) {
          if (submenu.hasClass('expanded')) {
            submenu.slideUp(function() {submenu.removeClass('expanded');});
          }
          else {
            submenu.slideDown(function() {submenu.addClass('expanded');});
          }
        }
      }
    });
  };

  var calendarInit = function () {

    var eventSection = $('#section-events');
    eventSection.find(' .calendar-wrapper .calendar').datepicker({
      locale: 'ru',
      dateFormat: "yy-mm-dd",
      onSelect: function(dateText, instance) {
        console.log(dateText);
        eventSection.find('.calendar-wrapper').fadeToggle(300);
      }
    });
    eventSection.find('.actions .date').click(function(e) {
      e.preventDefault();
      eventSection.find('.calendar-wrapper').fadeToggle(300);
    });
    eventSection.find('a.x').click(function(e) {
      e.preventDefault();
      eventSection.find('.calendar-wrapper').fadeToggle(300);
    });

  };

  var dropSelector = function () {
    var menu = $('.select-types > div');
    var link = $('.select-types > a');
    link.click(function(e) {
      var link = $(this);
      e.preventDefault();
      link.toggleClass('active');
      if (link.hasClass('active')) {
        menu.fadeIn(300);
      }
      else {
        menu.fadeOut(300);
      }
    });
    $('.select-types li').click(function() {
      var value = $(this).data('value');
      console.log(value);
      link.click();
    });
    menu.mCustomScrollbar();
  };

  $(function() {

    equalizeBlocks();
    searchBarInit();
    emoMenuBehavior();
    handBookInit();
    calendarInit();
    dropSelector();
  });
})(jQuery);