document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you-message");

  // Detect Netlify's generated success message (visueel)
  const submitted = sessionStorage.getItem("form-submitted");

  if (submitted === "true") {
    if (form) form.classList.add("d-none");
    if (thankYou) thankYou.classList.remove("d-none");
    sessionStorage.removeItem("form-submitted");
  }

  if (form) {
    form.addEventListener("submit", function () {
      sessionStorage.setItem("form-submitted", "true");
    });
  }
});
