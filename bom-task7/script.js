const countries = {
  ger: ['Berlin', 'Hamburg', 'Munich'],
  usa: ['New York', 'Chicago', 'Brooklyn'],
  ukr: ['Kyiv', 'Lviv', 'Kharkiv']
}

const cities = document.getElementById('cities');
const res = document.getElementById('result');
const country = document.getElementById('country');

function checkCities() {

  const countryValue = country.value;

  cities.innerHTML = '';

  const citA = countries[countryValue] || [];

  citA.forEach((city) => {
    const option = document.createElement('option');
    option.value = city;
    option.text = city;
    cities.appendChild(option);
  });
}

checkCities();
country.addEventListener('change', checkCities);

