'use strict';

const searchButton = document.getElementById('search-btn');
const countryInput = document.getElementById('country-input');



searchButton.addEventListener('click', () => {
// Input Value...
let countryName = countryInput.value;
let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
console.log(url);

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data[0]);
  // console.log(data[0].capital[0]);
  // console.log(data[0].flags.svg);
  // console.log(data[0].name.common);
  // console.log(data[0].continents[0]);
  // console.log(Object.keys(data[0].currencies)[0]);
  // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
  // console.log(Object.values(data[0].languages).toString());


  result.innerHTML = `
  <img src="${data[0].flags.svg}" class="flag-country"/>

  <div class='content-country'> 

  <div class='data-capital'>
  <p class='data-display'><span>Capital:</span> ${data[0].capital[0]}</p>
  </div>

  <div class='data-continent'>
  <p class='data-display'><span>Continent:</span> ${data[0].continents[0]}</p>
  </div>

  <div class='data-population'>
  <p class='data-display'><span>Population:</span> ${data[0].population}</p>
  </div>

  <div class='data-population'>
  <p class='data-display'><span>Currency:</span> ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
  </div>

  <div class='data-population'>
  <p class='data-display'><span>Common Languages:</span> pENE</p>
  </div>


  </div>
  `;
 })
});
