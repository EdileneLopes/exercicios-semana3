/*Crie uma função que receba um número e devolva uma soma progressiva. 
Por exemplo, recebendo o número 5, a função deve retornar 15, 
ou seja, o resultado de 1 + 2 + 3 + 4 + 5. 
*/

const query = require('synchronous-user-input');

const num = parseInt(query("Digite um número inteiro: "));

let x = 0;
contador = 0;

while(contador < num){
    contador++
    x = x + contador
}
console.log(`A soma dos itens até ${num} é: ${x}`)
