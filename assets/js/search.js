
    function searchFunction() {
    var input = document.querySelector('input[type="search"]'); // Zoekveld
    var filter = input.value.toLowerCase(); // Zoekterm in kleine letters
    var elements = document.querySelectorAll('main h2, main h3, main p, main li'); // Elementen waarin gezocht wordt
    var found = false;
  
    elements.forEach(function(element) {
      var text = element.textContent.toLowerCase();
      if (text.includes(filter) && !found && filter.trim() !== "") {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll smooth naar element
        element.style.backgroundColor = 'yellow'; // Highlight gevonden tekst
        found = true;
        
        setTimeout(function() {
          element.style.backgroundColor = ''; // Verwijder highlight na 2 seconden
        }, 2000);
      }
    });
  
    if (!found && filter.trim() !== "") {
      alert("Geen resultaat gevonden.");
    }
  }

