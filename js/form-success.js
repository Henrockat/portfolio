document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you-message");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // 
    const formData = new FormData(form);

    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => {
      form.classList.add("d-none");
      thankYou.classList.remove("d-none");
    })
    .catch((error) => alert("Fout bij verzenden. Probeer opnieuw."));
  });
});
