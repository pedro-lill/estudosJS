var penultimo = 0
var ultimo = 1
var c= 1
while (c<10){
    var termo = penultimo + ultimo
    var penultimo = ultimo
    var ultimo = termo
    
    c++
    console.log("valor "  +termo)
}

