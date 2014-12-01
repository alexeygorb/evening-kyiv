(function($) {
  $(function() {
    var mapOptions = {
      center: new google.maps.LatLng(50.45, 30.53),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map($('#map').get(0),
      mapOptions);
  });
})(jQuery);
