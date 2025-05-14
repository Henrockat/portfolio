form.addEventListener("submit", () => sessionStorage.setItem("form-submitted", "true"));
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you-message");

  // Als formulier net werd verzonden, toon bedankbericht
  if (sessionStorage.getItem("form-submitted") === "true") {
    if (form) form.classList.add("d-none");
    if (thankYou) thankYou.classList.remove("d-none");
    sessionStorage.removeItem("form-submitted");
  }

  // Als gebruiker op "verzend" klikt, sla op in sessionStorage
  if (form) {
    form.addEventListener("submit", function () {
      sessionStorage.setItem("form-submitted", "true");
    });
  }
});