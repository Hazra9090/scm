$(document).ready(function () {
  var owl = $("#project-card-wrapper").owlCarousel({
    loop: false,
    margin: 32,
    nav: true,
    dots: true,
    responsiveClass: true,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
        stagePadding: 30,
        margin: 16,
      },
      568: {
        items: 1,
        stagePadding: 50,
        margin: 16,
      },
      768: {
        stagePadding: 60,
        items: 1,
        margin: 16,
      },
      1200: {
        stagePadding: 60,
        items: 1,
      },
      1400: {
        stagePadding: 110,
        items: 1,
      }
    },
    onInitialized: adjustDots, // Custom function to adjust dots on initialization
    onChanged: adjustDots      // Custom function to adjust dots when slides change
  });

  function adjustDots(event) {
    // Remove small-dot class from all dots initially
    $(".owl-dot").removeClass('small-dot');

    // Check if the carousel is at the last item
    var items = event.item.count;
    var last = event.item.index + event.page.size >= items;

    if (last) {
      // Add 'small-dot' class to the first dot if on last item
      $(".owl-dot").first().addClass('small-dot');
    } else {
      // Add 'small-dot' class to the last dot if not on last item
      $(".owl-dot").last().addClass('small-dot');
    }
  }
});
