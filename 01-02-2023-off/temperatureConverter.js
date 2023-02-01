function temperatureConverter(fahrenheit) {

    // (32°F − 32) × 5/9 = 0°C
let celsius = (fahrenheit - 32) /1.8;
celsius = parseFloat(celsius.toFixed(1));
return celsius;

}

let fahrenheit = 60;

const celsius = temperatureConverter (fahrenheit);
console.log(celsius, typeof (celsius));