let valores = [8, 7, 6 ,2 ,3 ,4 , 5]

valores.push(1);
valores.push(0)
valores.sort()

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`O valor ${valores[pos]} esta na posicao ${pos} !`)
// }
// console.log(`O vetor tem ${valores.length} valores\n`) 


for(let pos in valores ){
    console.log(`O valor ${valores[pos]} esta na posicao ${pos} !`)
}


