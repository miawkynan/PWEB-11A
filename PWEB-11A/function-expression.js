// greetworld = identifier atau nama fungsi
// function = keyword function
// (messsage) = parameter
// {} = function body atau isi function
const greetWorld = function (message){
    console.log('Hello World!');
    
}

// coba perilaku hoisting
console.log(convertCelciusToFahrenheit(2));


const convertCelciusToFahrenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
}

console.info('Contoh Function Expression');
console.log(convertCelciusToFahrenheit(20));
