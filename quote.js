fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.quotable.io/random?tags=technology|science'))
  .then(res => res.json())
  .then(data => {
    const quoteData = JSON.parse(data.contents);
    document.getElementById('quote').innerText = `"${quoteData.content}" — ${quoteData.author}`;
  })
  .catch(() => {
    // Fallback quote als de API faalt
    document.getElementById('quote').innerText =
      '"Technologie is magie die werkt." — Arthur C. Clarke';
  });
