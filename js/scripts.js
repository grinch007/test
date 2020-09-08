$(document).ready(function(){

    /* Hamburger menu animation */
    $('.open-button').click(function(){
      $(this).toggleClass('open');
    });

	 /* Menu fade/in out on mobile */
    $(".open-button").click(function(e){
        e.preventDefault();
        $(".mobile-menu").toggleClass('open');
    });
    $(".m-btn").click(function(e){

        $('.open-button').toggleClass('open');
        $(".mobile-menu").toggleClass('open');
    });
});



// photos source: http://blog.repponen.com/blog/2014/7/28/moscow

$(document).ready(function() {
  $('.container--gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 230,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
});






