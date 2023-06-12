'use strict';

const nam = document.querySelector('.name');
const fam = document.querySelector('.lastname');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let datName = nam.value;
  let datFam = fam.value;

  const data = {imya: datName, famil: datFam};
  fetch('http://localhost:3000/requests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .catch(error => console.log('error'));

});


