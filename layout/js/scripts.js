$(function() {

  equalizeBlocks();

  var emoMenu = $('#emo-tags');
  emoMenu.css('opacity', 0);
  $('.emo-link a').click(function(e) {
    e.preventDefault();
    var emolink = $(this);
    var mainMenu = $('#main-menu');
    var emoMenu = $('#emo-tags');
    if (emolink.hasClass('active')) {
      emoMenu.animate({
        left: -500,
        opacity: 0
      }, function() {$(this).hide()});
      mainMenu.show();
      mainMenu.css({
        left: -500
      });
      mainMenu.animate({
        left: 0,
        opacity: 1
      });
      emolink.removeClass('active');
    }
    else {
      mainMenu.animate({
        left: -500,
        opacity: 0
      }, function() {$(this).hide()});
      emoMenu.show();
      emoMenu.css({
        left: -500
      });
      emoMenu.animate({
        left: 0,
        opacity: 1
      });
      emolink.addClass('active');
    }
  });

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

  /*$('#section-events .calendar-wrapper .calendar').datepicker();*/

});

var equalizeBlocks = function () {

  $('.news-latest-3,.news-latest-4').equalizer({columns: 'article'});
  $('.events-list').equalizer({columns: 'article'});
  $('.read-more-list').equalizer({columns: 'article'});
  $('.headlines .headline-row').equalizer({columns: '.headline'});

};
