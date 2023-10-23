/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const kelvin = Number(celsius) + Number(273.15);
    const fahrenheit = celsius.toFixed(5) * 1.80 + 32.00;
    
    return [kelvin.toFixed(5), fahrenheit.toFixed(5)];
};