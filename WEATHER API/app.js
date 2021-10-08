var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');

button.addEventListener('click', function (name) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      input.value +
      'APIKEY_GOES_HERE'
  )
    .then((response) => response.json())
    .then((data) => {
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];

      main.innerHTML = nameValue;
      desc.innerHTML = 'Desc - ' + descValue;
      temp.innerHTML = 'Temp - ' + tempValue;
      input.value = '';
    })

    .catch((err) => alert('Wrong city name!'));
});

const celciusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

const inputs = document.getElementsByClassName('input');

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener('input', function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case 'celsius':
        fahrenheitInput.value = value * 1.8 + 32;
        kelvinInput.value = value + 273.15;
        break;
      case 'fahrenheit':
        celsiusInput.value = (value - 32) / 1.8;
        kelvinInput.value = (value - 32) / 1.8 + 273.15;
        break;
      case 'kelvin':
        celsiusInput.value = value - 273.15;
        fahrenheitInput.value = (value - 273.15) * 1.8 + 32;
        break;
    }
  });
}
