/*O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, 
com cerca de 10 caixas. 
Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu 
um tabela que contém o número de itens 
que o cliente comprou e ao lado o valor da conta. Desta forma a
atendente do caixa precisa apenas contar quantos itens o
cliente está levando e olhar na tabela de preços. Você foi contratado para
desenvolver o programa que monta esta tabela de preços, 
que conterá os preços de 1 até 50 produtos.

refazer, é para exibir a tabela...
*/


//for (inicialização; teste lógico; incremento)

console.log("         Tabela de Preços     ")
console.log("----------------------------------")

for(let indice = 1; indice <= 50; indice++){
    console.log(`Para ${indice} produtos -----> R$ ${indice * 1.99.toFixed(2)} `)
}


