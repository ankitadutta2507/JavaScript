const kelvin=293;/*Conversion from Kelvin to C and F*/
celsius=kelvin-273;/*Formula for Celsius*/
console.log("Temperature in celsius: "+celsius);
farenhite=celsius*(9/5)+32;
console.log(`Temperature in Farenhite: ${Math.floor(farenhite)}`);/*Rounding the value for farenhite*/
newton=Math.floor(celsius*(33/100));
console.log(`Newton: ${newton}`);
