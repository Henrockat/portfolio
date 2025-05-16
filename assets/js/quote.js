fetch('https://api.quotable.io/random?tags=technology|science')
  .then(res => res.json())
  .then(data => {
    document.getElementById('quote').innerText = `"${data.content}" — ${data.author}`;
  })
  .catch(() => {
    document.getElementById('quote').innerText = 'Kon geen quote laden.';
  });
