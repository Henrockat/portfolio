fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.quotable.io/random?tags=technology|science'))
  .then(res => res.json())
  .then(data => {
    const quoteData = JSON.parse(data.contents);
    document.getElementById('quote').innerText = `"${quoteData.content}" — ${quoteData.author}`;
  })
  .catch(() => {
    // Fallbacks (als de API faalt)
    const fallbackQuotes = [
      { text: "Technologie is magie die werkt.", author: "Arthur C. Clarke" },
      { text: "De wetenschap van vandaag is de technologie van morgen.", author: "Edward Teller" },
      { text: "Elke voldoende geavanceerde technologie is niet te onderscheiden van magie.", author: "Arthur C. Clarke" },
      { text: "Innovatie onderscheidt een leider van een volger.", author: "Steve Jobs" },
      { text: "Het doel van wetenschap is niet om nieuwe feiten te verzamelen, maar om nieuwe manieren van denken mogelijk te maken.", author: "William Bragg" }
    ];

    const random = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    document.getElementById('quote').innerText = `"${random.text}" — ${random.author}`;
  });
