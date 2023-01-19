// modelagem algebrica de uma funcao quadratica

// funcao quadratica
function quadratica(a, b, c) {
    var a = 3;
    var b = 2;
    var c = 1;
    return function(x) {
        return a * x * x + b * x + c;
    };
}

// derivada da funcao quadratica
function derivada(a, b, c) {
    var a = 3;
    var b = 2;
    var c = 1;
    return function(x) {
        return 2 * a * x + b;
    };
}

// calcula a raiz da funcao quadratica
function raiz(a, b, c) {
    var a = 3;
    var b = 2;
    var c = 1;
    return -b / (2 * a);
}

// calcula o valor da funcao quadratica no ponto x
function valor(a, b, c, x) {
    return a * x * x + b * x + c;
}

// calcula o valor da derivada da funcao quadratica no ponto x
function valorDerivada(a, b, c, x) {
    return 2 * a * x + b;
}

//grafico da funcao quadratica
function grafico(a, b, c) {
    var x = -10;
    while (x <= 10) {
        var y = valor(a, b, c, x);
        console.log(x, y);
        x = x + 0.5;
    }
}
