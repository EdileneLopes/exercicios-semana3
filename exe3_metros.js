/*Faça um programa que receba um valor em metros 
 e chame uma função que converta em milímetros.
 */

 const query = require('synchronous-user-input');
 const metro = parseFloat(query("Digite quantos metros quer converter: "));

 //função para conversão
 function converta(){
     console.log(`${metro} metros convertido em milímetros fica: `);
     return (metro*1000).toLocaleString('pt-BR')
 }

 console.log(converta())
