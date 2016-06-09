// This is where it all goes :)

$(document).ready(function(){
  $('#slippry').slippry({
    auto: false,
    start: "random",
    transition: "horizontal"
  });

  $('.trigger').magnificPopup({
    type: 'inline',
    mdClick: true,
    closeBtnInside: true
  });

  var $root = $('html, body');
  $('.scrollTo').on('click', function(e) {
    $root.animate({
      easing: "linear",
      scrollTop: $( $.attr(this, 'href')  ).offset().top - 50
    }, 300);
    return false;
  });

	$('.toggle-button').on('click', function() {
		$('#mobile nav').toggle(); 
	})

  $('#form').validate({
    errorPlacement: function(error, element) {
        //error.insertAfter( element );
    }
  });

  header();
});

function header() {
  var a = $(window),
  b = $(".nav-trigger"),
  c = b.offset().top - 50;
  a.scroll(function() {
    c < a.scrollTop()  ? $("header").addClass("fade") : $("header").removeClass("fade")
  })
}

