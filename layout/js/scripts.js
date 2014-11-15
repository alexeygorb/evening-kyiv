(function($) {

  var equalizeBlocks = function (context) {

    $('.news-latest-3,.news-latest-4', context).once('equal').equalizer({columns: 'article'});
    $('.events-list').once('equal').equalizer({columns: 'article'});
    $('.read-more-list').once('equal').equalizer({columns: 'article'});
    $('.headlines .headline-row').once('equal').equalizer({columns: '.headline'});

  };

  var searchBarInit = function () {

    var searchBar = $('#menu-secondary li.search');
      searchBar.addClass('collapsed');
      setTimeout(function () {
        searchBar.addClass('transition')
      }, 33);
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

  var handBookInit = function(context) {
    var wrapper = $('.handbook-wrapper', context).once('handbook');
    if (wrapper.length > 0) {
      $('.handbook-wrapper-inner').mCustomScrollbar();
      $('.handbook-wrapper a').click(function (e) {
        var link = $(this);
        if (link.attr('href') == '#') {
          e.preventDefault();
          var item = link.parent();
          var submenu = item.find('ul');
          if (submenu.length > 0) {
            if (submenu.hasClass('expanded')) {
              submenu.slideUp(function () {
                submenu.removeClass('expanded');
              });
            }
            else {
              submenu.slideDown(function () {
                submenu.addClass('expanded');
              });
            }
          }
        }
      });
    }
  };

  var calendarInit = function (context) {

    var eventSection = $('#section-events');
    var calendar = eventSection.find('.calendar-wrapper .calendar');
    var once = calendar.once('calendar');
    if (once.length > 0) {
      calendar.datepicker({
        locale: 'ru',
        dateFormat: "yy-mm-dd",
        onSelect: function (dateText, instance) {
          console.log(dateText);
          eventSection.find('.calendar-wrapper').fadeToggle(300);
        }
      });
      eventSection.find('.actions .date').click(function (e) {
        e.preventDefault();
        eventSection.find('.calendar-wrapper').fadeToggle(300);
      });
      eventSection.find('a.x').click(function (e) {
        e.preventDefault();
        eventSection.find('.calendar-wrapper').fadeToggle(300);
      });
    }

  };

  var dropSelector = function (context) {
    var types = $(context).find('.select-types').once('drop');
    if (types.length > 0) {
      var menu = $('.select-types > div');
      var link = $('.select-types > a');
      link.click(function (e) {
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
      $('.select-types li').click(function () {
        var value = $(this).data('value');
        console.log(value);
        link.click();
      });
      menu.mCustomScrollbar();
    }
  };

  var initBehaviors = function(context) {

    equalizeBlocks(context);
    handBookInit(context);
    calendarInit(context);
    dropSelector(context);

  };

  $(function() {

    searchBarInit();
    emoMenuBehavior();

    initBehaviors(document);

    var offset = 5;
    $('#section-news .more-link').click(function(e) {
      e.preventDefault();
      $.ajax('/ajax/news/' + offset, {
        dataType: 'html',
        success: function(data) {
          offset += 6;
          var receiver = $('#section-news .ajax-receiver');
          var newContent = $(data).wrapAll('<div class="new-content"></div>').parent();
          newContent.hide();
          newContent.appendTo(receiver);
          newContent.slideDown();
          initBehaviors(receiver);
        }
      });
    });
  });
})(jQuery);