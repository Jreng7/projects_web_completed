
let celcius = 0;
let fahrenheit = 0;

celcius = parseFloat(prompt('Digite a temperatura em Celcius: '))

fahrenheit = celcius * 1.8 + 32

alert(`A temperatura ${celcius} em Fahrenheit é ${fahrenheit.toFixed(2)}`)