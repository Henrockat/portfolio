document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("success") === "true") {
    const form = document.getElementById("contact-form");
    const thankYou = document.getElementById("thank-you-message");
    if (form && thankYou) {
      form.classList.add("d-none");
      thankYou.classList.remove("d-none");
    }
  }
});
