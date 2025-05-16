fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random'))
  .then(res => res.json())
  .then(data => {
    const parsed = JSON.parse(data.contents);
    document.getElementById('quote').innerText = `"${parsed[0].q}" — ${parsed[0].a}`;
  })
  .catch(() => {
    document.getElementById('quote').innerText = 'Kon geen quote laden.';
  });
