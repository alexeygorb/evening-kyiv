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

  var floatSidebar = function (context) {
    var wrapper = $('.page-main #section-news aside .inner', context).once('float');
    if (wrapper.length > 0) {
      var run = false;
      // Calculate the height.
      var scrollStart = wrapper.offset().top;
      var stopPoint = $('#section-events').position().top;
      var heightCorrection = -43;

      // Calculate initial height;
      var w = $(window);
      var offset = wrapper.offset();
      var sTop = w.scrollTop();
      var viewHeight = w.height();
      var height = viewHeight - (offset.top - sTop);
      if (height > viewHeight) {
        height = viewHeight;
      }
      wrapper.css('height', viewHeight + heightCorrection);


      var calculation = function(e) {
        run = true;
        // correction (vertical padding, margin and border of the block).

        var offset = wrapper.offset();
        var sTop = w.scrollTop();
        var viewHeight = w.height();

        if (scrollStart - sTop <= 0) {
          // We'll need to stop at some point:
          //console.log(offset.top, wrapper.outerHeight(), stopPoint.top);
          if (sTop + wrapper.outerHeight(true) > stopPoint) {
            wrapper.addClass('stopped');
            wrapper.removeClass('sticky');
            wrapper.css('top', stopPoint - wrapper.outerHeight(true));
            return;
          }
          else {
            wrapper.addClass('sticky');
            wrapper.removeClass('stopped');
            wrapper.css('top', null);
          }
          wrapper.css('height', viewHeight + heightCorrection);
          return;
        }
        else {
          wrapper.removeClass('sticky');
          wrapper.removeClass('stopped');
          var height = viewHeight - (offset.top - sTop);
          if (height > viewHeight) {
            height = viewHeight;
          }
        }

        wrapper.css('height', height + heightCorrection);
      };

      $(window).resize(calculation);
      $(window).scroll(calculation);
      if (!run) {
        calculation();
      }

      wrapper.mCustomScrollbar();

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

    var asideSection = $('aside .inner');
    calendar = asideSection.find('.calendar-wrapper .calendar');
    once = calendar.once('calendar');
    if (once.length > 0) {
      calendar.datepicker({
        locale: 'ru',
        dateFormat: "yy-mm-dd",
        onSelect: function (dateText, instance) {
          console.log(dateText);
        }
      });
    }

    var svinPageLink = $('.page-svin-page .actions .date').once('calendar');
    if (svinPageLink.length > 0) {
      var calendar = $('.page-svin-page .page-description .calendar-wrapper .calendar');
      calendar.datepicker({
        locale: 'ru',
        dateFormat: "yy-mm-dd",
        onSelect: function (dateText, instance) {
          console.log(dateText);
          calendar.parent().fadeToggle(300);
        }
      });
      svinPageLink.click(function (e) {
        e.preventDefault();
        calendar.parent().fadeToggle(300);
      });
      calendar.parent().find('a.x').click(function (e) {
        e.preventDefault();
        calendar.parent().fadeToggle(300);
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
        $('.select-types a span').html($(this).html());
        link.click();
      });
      menu.mCustomScrollbar();
    }
  };

  var initCarousel = function() {
    var carousel = $('.carousel-calendar').once('calendar');
    carousel.each(function() {
      $(this).find('.carousel').jcarousel();
      $('.prev', this)
        .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
        })
        .jcarouselControl({
          target: '-=3'
        });

      $('.next', this)
        .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
        })
        .jcarouselControl({
          target: '+=3'
        });
    });

    $('.read-more').once('carousel').each(function() {
      var carousel = $(this).find('.read-more-list');
      carousel.jcarousel();
      carousel.on('jcarousel:scrollend', function(event, carousel, target, animate) {
        // All count just in case...
        var all = $(carousel.element()).find('article');
        var count = all.length;
        $('.content-pager .pager .all .count').html(count);

        var visible = carousel.fullyvisible();

        var firstIndex = $(visible.get(0)).index();
        var range = firstIndex + 1;
        if (visible.length > 1) {
          range += '-' + (firstIndex + visible.length);
        }

        $('.content-pager .pager .all .range').html(range);

      });
      $('.content-pager .pager .prev')
        .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
        })
        .jcarouselControl({
          target: '-=2'
        });

      $('.content-pager .pager .next')
        .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
        })
        .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
        })
        .jcarouselControl({
          target: '+=2'
        });
    });
  };

  var initAjax = function(context) {

    var offset = 5;
    $('#section-news .more-link').once('ajax').click(function(e) {
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

    var date = '2014-11-12';
    $('.date-sections .more-link').once('ajax').click(function(e) {
      e.preventDefault();
      $.ajax('/ajax/events/' + date, {
        dataType: 'json',
        success: function(data) {
          date = data.date;
          offset += 6;
          var receiver = $('.date-sections .ajax-receiver');
          var newContent = $(data.content).wrapAll('<div class="new-content"></div>').parent();
          newContent.hide();
          newContent.appendTo(receiver);
          newContent.slideDown();
          initBehaviors(receiver);
        }
      });
    });



  };

  var initBehaviors = function(context) {

    equalizeBlocks(context);
    handBookInit(context);

    calendarInit(context);
    dropSelector(context);
    initAjax(context);

  };

  $(function() {

    searchBarInit();
    emoMenuBehavior();
    floatSidebar();
    initCarousel();

    initBehaviors(document);

  });
})(jQuery);
