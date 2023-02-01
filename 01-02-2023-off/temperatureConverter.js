function temperatureConverter(fahrenheit) {

    // (32°F − 32) × 5/9 = 0°C
    let celsius = 0;
    celsius = (fahrenheit - 32) * 5 / 9;
    let convertCelsius = parseFloat(celsius.toFixed(2));
    return convertCelsius;
}

let fahrenheit = 103;
const celsius = temperatureConverter(fahrenheit);
console.log(celsius, typeof (celsius));