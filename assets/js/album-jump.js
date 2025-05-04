document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('#projectCarousel');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const bsCarousel = new bootstrap.Carousel(carousel);
  
    // Klik op thumbnail
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        bsCarousel.to(index);
      });
    });
  
    // Highlight actieve thumbnail
    carousel.addEventListener('slid.bs.carousel', function (event) {
      thumbnails.forEach(thumb => thumb.classList.remove('active-thumb'));
      thumbnails[event.to].classList.add('active-thumb');
    });
  });
  