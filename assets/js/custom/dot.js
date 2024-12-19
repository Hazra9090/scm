$(document).ready(function () {
  var owl = $(".owl-carousel");

  owl.owlCarousel({
    // Your options here
    onInitialized: adjustDots, // Call when the carousel is initialized
    onTranslated: adjustDots  // Call on slide change
  });

  function adjustDots(event) {
    const dots = $('.owl-dot');
    const itemCount = event.item.count;
    const currentIndex = event.item.index;

    // Remove small-dot class from all dots initially
    dots.removeClass('small-dot');

    // Set the first or last dot to be smaller based on slide index
    if (currentIndex === itemCount - 1) {
      dots.first().addClass('small-dot'); // First dot smaller when last slide is active
    } else {
      dots.last().addClass('small-dot'); // Last dot smaller until the last slide
    }
  }
});
