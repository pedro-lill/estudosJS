# estudosJS

# estudos desenvolvidos em js.

variaveis:
    var n1 = Number(window.prompt('digite o primeiro numero')) // window prompt retorna uma string 
    var n2 = Number(window.prompt('digite o segundo numero')) // se eu precisar de int ou float uso o :
                                                             // numer.parseint() ou number.parsefloat()
    o number na frente faz com que o js identifique que é tipo number e reconheça se é float ou int

Var tipo number com valor monetario:
    value.toFixed(2) // 2 casas decimais
    value.toFixed(2).replace(".", ",") // troca o ponto por virgula
    value.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+\,)/g, "$1.") // troca o ponto por virgula e adiciona o ponto a cada 3 digitos
    value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) // formata o valor monetario
    value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace("R$", "R$ ") // adiciona um espaco apos o R$
    value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace("R$", "R$ ").replace(/(\d)(?=(\d{3})+\,)/g, "$1.") // adiciona um espaco apos o R$ e adiciona o ponto a cada 3 digitos
    value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}).replace("R$", "R$ ").replace(/(\d)(?=(\d{3})+\,)/g, "$1.").replace(".", ",") // adiciona um espaco apos o R$, adiciona o ponto a cada 3 digitos e troca o ponto por virgula
    
    var salario = Number(window.prompt('qual é seu salario ?'))
    let idi= salario.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})
        

funções :
    nome.length
    nome.toUpperCase
    nome.toLowerCase
    Contar caracteres: document.write(`Olá <strong> ${nome} </strong> seu nome tem ${nome.length()} letras. <br>`)
    Maiusculas : document.write(`Olá <strong> ${nome.toUpperCase()}</strong> em maiusculas. <br>`)
    Minusculas : document.write(`Olá <strong> ${nome.toLowerCase()}</strong> em minusculas. <br>`)


Operadores:
    var n1 = 5
    var n2 = 2
    var soma = n1 + n2  // soma
    var sub = n1 - n2           // subtração
    var mult = n1 * n2          // multiplicação
    var div = n1 / n2           // divisão
    var resto = n1 % n2         // resto da divisão
    var pot = n1 ** n2          // potenciação
    var raiz = Math.sqrt(n1)    // raiz quadrada
    var raiz2 = Math.sqrt(n2)   // raiz quadrada
    var arred = Math.round(n1)  //arredondar
    var arred2 = Math.round(n2) //arredondar
    var arred3 = Math.ceil(n1)  //arredondar pra cima
    var arred4 = Math.ceil(n2)  //arredondar pra cima
    var arred5 = Math.floor(n1) //arredondar pra baixo
    var arred6 = Math.floor(n2) //arredondar pra baixo
    var max = Math.max(n1, n2)  // maior numero
    var min = Math.min(n1, n2)  // menor numero
    var aleatorio = Math.random() // numero aleatorio
    var aleatorio2 = Math.random() * 100 // numero aleatorio de 0 a 100
    
igual na matematica:
    ordem de precedencia:
        1º parenteses                    ()
        2º potenciação                   **
        3º multiplicação e divisão       * / %   
        4º soma e subtração              + -   

auto atribuição
    var n = 3
    n += 5 // n = n + 5
    n -= 5 // n = n - 5
    n *= 5 // n = n * 5
    n /= 5 // n = n / 5
    n %= 5 // n = n % 5
    n **= 5 // n = n ** 5

Incremento:
    x = 5
    x++ // x = x + 1
    x-- // x = x - 1


Operadores relacionais:
    > maior que
    < menor que
    >= maior ou igual
    <= menor ou igual
    == igual
    != diferente
    !== diferente e de tipos diferentes
    === igual e do mesmo tipo

Operadores lógicos:
    primeiro o nao depois o e depois o ou
    ! não (negação)
    && e (conjunção)
    || ou (disjunção)

Procedencia:
    () ** / ...
    > < >= ...
    !
    && 
    ||

Operador ternario
    condição ? true : false
    teste ? 'verdadeiro' : 'falso'
    media>=7 ? 'aprovado' : 'reprovado'
    


        
