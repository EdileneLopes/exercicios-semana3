/*Crie uma função que receba uma temperatura em Celsius e 
chame uma função que converta para Fahrenheit. F = 9*C/5 + 32
*/
//biblioteca que permite fazer interação com o usuário, no windows10
const query = require('synchronous-user-input');

//função de celius para fahrenheit
function converte(tempcelsius){
    return(((tempcelsius*9)/5)+32).toFixed(2)
};

//função de fahrenheit para celsius
function converter(temp){
    return(((temp - 32)*5)/9).toFixed(2)
 };

console.log("Conversão de temperaturas");
console.log("------------------------------");

//pergunta ao usuário qual escala quer converter
const escala = parseInt(query("Para qual escala quer converter? 1-Celsius, 2-Fahrenheit "));

//opções de escala de temperatura
if (escala == 1){
    const tempcelsius = parseFloat(query("Informe a temperatura em Celsius: "));
    console.log("Veja a temperatura em Fahrenheit: ");
    console.log(converte(tempcelsius))
}else if(escala == 2) {
    const temp = parseFloat(query("Digite a temperatura em Fahrenheit "));
    console.log("Veja a temperatura em Celsius: ");
    console.log(converter(temp))
}else {
    console.log("Escolha uma opção válida! ")
}



