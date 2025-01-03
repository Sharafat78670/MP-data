fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log('Test Result:', result);
      alert('Test successful!');
    })
    .catch((error) => {
      console.error('Test Error:', error);
    });
  