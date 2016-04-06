// Scripts for rows.html

$('.animate-on-mouseenter').on('mouseenter', function() {
	$(this).toggleClass("animated tada");
}).on('mouseleave', function() {
  $(this).toggleClass("animated tada");
});

$('.animate-on-mouseenter2').on('mouseenter', function() {
	$(this).toggleClass("animated fadeInDown");
}).on('mouseleave', function() {
  $(this).toggleClass("animated fadeInDown");
  });

$('.animate-on-mouseenter3').on('mouseenter', function() {
	$(this).toggleClass("animated flip");
}).on('mouseleave', function() {
  $(this).toggleClass("animated flip");
  });

