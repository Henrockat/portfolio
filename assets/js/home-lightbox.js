document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const lightbox = new bootstrap.Modal(document.getElementById("lightboxModal"));
  const lightboxImage = document.getElementById("lightboxImage");
  let currentIndex = 0;

  function showImage(index) {
    const image = thumbnails[index];
    if (image) {
      lightboxImage.src = image.src;
      currentIndex = index;
    }
  }

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      showImage(index);
      lightbox.show();
    });
  });

  document.getElementById("prevImage").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    showImage(currentIndex);
  });

  document.getElementById("nextImage").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    showImage(currentIndex);
  });
});
