var simples = "só armazena um valor"
var composta = "armazena mais de um valor em uma mesma estrutura"

let num = [5, 8, 2, 9, 3]
num[5] = 6
num.push(7) // adiciona um valor no final do vetor
num.length // mostra o tamanho do vetor
num.sort() // ordena o vetor em ordem crescente
num.push(1) // adiciona um valor no final do vetor
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)let pos = num.indexOf(4)
if(pos == -1){
    console.log("valor nao encontrado")
}else{    console.log(`Valor 4 na pos :  ${pos}`)
}

let vetor = [5+3, 4, 2%1, 5*3**4, 10-5+3, 10%3+4/2]

console.log(vetor)