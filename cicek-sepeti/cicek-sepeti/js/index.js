
const myCarouselElement = document.getElementById('myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
interval: 2000,
touch:true,
pause:"hover"
})

document.getElementById("prev").addEventListener("click", function() {
    carousel.prev();
  });

  document.getElementById("next").addEventListener("click", function() {
    carousel.next();
  });


