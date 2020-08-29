/*Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros.
   - Se somente um argumento for passado, retorne o valor do argumento.
   - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
   - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo,
    e o resultado dividido pelo terceiro.
   - Se nenhum argumento for passado, retorne "não recebeu parâmetro"
   */
  
const read = require('readline-sync')

const valor1 = parseInt(read.question("Informe o primeiro valor: "))
const valor2 = parseInt(read.question("Digite o segundo valor: "))
const valor3 = parseInt(read.question("Agora, informe o terceiro valor: "))


function somar(valor1, valor2, valor3){
    if(isNaN(valor1) && isNaN(valor2) && isNaN(valor3)){
        console.log("Não recebeu parâmetro!")
        return
    }else if (isNaN(valor2) && isNaN(valor3)){
        console.log(valor1)
        return
    }else if (isNaN(valor1) && isNaN(valor3)){
        console.log(valor2)
        return
    }else if (isNaN(valor1) && isNaN(valor2)){
        console.log(valor3)
        return
    }
    if (isNaN(valor1)){
        console.log("A soma dos valores é: ", valor2 + valor3)
        return
    }else if (isNaN(valor2)){
        console.log("A soma é: ", valor1 + valor3)
        return
    }else if (isNaN(valor3)){
        console.log("A soma deu: ", valor1 + valor2)
        return
    }
    if (!isNaN(valor1)) 
        if (!isNaN(valor2)) 
            if (!isNaN(valor3)){
                console.log((valor1 + valor2)/valor3.toFixed(2))
                
    }
}

somar(valor1,valor2,valor3)
