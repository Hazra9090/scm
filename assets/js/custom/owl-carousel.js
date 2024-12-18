$(document).ready(function () {
  $("#project-card-wrapper").owlCarousel({
    loop: false,
    margin: 16,
    nav: true,
    items: 3,
    dots: true,
    responsiveClass: true,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
      },
      568: {
        items: 1,
        stagePadding: 40,
      },
      768: {
        stagePadding: 80,
        items: 1,
      },
      991: {
        items: 1,
        stagePadding: 180,
      },
      1240: {
        stagePadding: 150,
      },
      1600: {
        stagePadding: 200,
        items: 1,
      },
      1900: {
        items: 1,
      }
    },
  });
});

