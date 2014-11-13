$(function() {

  equalizeBlocks();

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

});

var equalizeBlocks = function () {

  $('.news-latest-3,.news-latest-4').equalizer({columns: 'article'});
  $('.events-list').equalizer({columns: 'article'});
  $('.read-more-list').equalizer({columns: 'article'});
  $('.headlines .headline-row').equalizer({columns: '.headline'});

};
