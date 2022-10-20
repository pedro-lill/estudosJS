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
    
DOM - > document object model
    Arvore DOM
    
                window

    location   document  history 

                html
                
        head            body

    title   meta     h1  p  a  img div 


Para navegar pelo DOM:
    por Marca:
        document.getElementsByTagName('p')

    por ID
        document.getElementById('msg')
            <div id = "msg">Clique em mim</div>
            <script>
                var corpo = window.document.body
                var p1 = window.document.getElementsByTagName('p')[1] // pega o primeiro elemento p
                var d = window.document.getElementById('msg')
                d.style.background = 'green'
                // d.innerText = 'estou aguardando'
                window.document.getElementById('msg').innerText = 'estou aguardando'

            </script>

    por Nome
        document.getElementsByName('nome')
        
    por Classe
        document.getElementsByClassName('msg')

    por Seletor
        document.querySelector('div#msg')
        document.querySelectorAll('p')

comandos JS:
    window.document.body
    window.document.write('Olá mundo! \n') // \n quebra de linha
    window.document.write(window.document.charset) // mostra o charset
    window.document.write(window.navigator.appName) // mostra o nome do navegador
    window.document.write(window.navigator.appVersion) // mostra a versão do navegador
    window.document.write(window.document.URL) // mostra a url
    window.document.write(window.document.domain) // mostra o dominio   
    window.document.write(window.document.title) // mostra o titulo
    window.document.write(window.document.lastModified) // mostra a ultima modificação
    window.document.write(window.document.referrer) // mostra a pagina de referencia
    window.document.write(window.document.cookie) // mostra o cookie
    window.document.write(window.document.body) // mostra o body
    window.document.write(window.document.head) // mostra o head
    window.document.write(window.document.images) // mostra as imagens
    window.document.write(window.document.links) // mostra os links
    window.document.write(window.document.forms) // mostra os forms
    window.document.write(window.document.styleSheets) // mostra as folhas de estilo
    window.document.write(window.document.scripts) // mostra os scripts
    window.document.write(window.document.anchors) // mostra os ancoras
    window.document.write(window.document.applets) // mostra os applets
    window.document.write(window.document.embeds) // mostra os embeds
    window.document.write(window.document.plugins) // mostra os plugins
    window.document.write(window.document.all) // mostra todos os elementos
    window.document.write(window.document.compatMode) // mostra o modo de compatibilidade
    window.document.write(window.document.characterSet) // mostra o conjunto de caracteres
    window.document.write(window.document.contentType) // mostra o tipo de conteudo
    window.document.write(window.document.doctype) // mostra o doctype
    window.document.write(window.document.documentMode) // mostra o modo de documento
    window.document.write(window.document.documentURI) // mostra o URI do documento
    window.document.write(window.document.documentElement) // mostra o elemento raiz
    window.document.write(window.document.documentURIObject) // mostra o objeto URI do documento
    window.document.write(window.document.embeds) // mostra os embeds


Eventos:
    Mouse onclik:
        mouseenter -> quando o mouse entra no elemento
        mouseleave -> quando o mouse sai do elemento
        mouseover -> quando o mouse passa por cima do elemento
        mousemove -> quando o mouse se move sobre o elemento
        mousedown -> quando o mouse é pressionado sobre o elemento
        mouseup -> quando o mouse é solto sobre o elemento
        click -> quando o mouse é clicado sobre o elemento
        dbclick -> quando o mouse é clicado duas vezes sobre o elemento


Condições:
    precisamos seguir uma sequencia de execução
    com as condições podemos mudar a sequencia que o programa segue
        if (condição){
            // bloco de código
        } else if (condição){
            // bloco de código
        } else {
            // bloco de código
        } 
    desvio condicional simples
        if (condição){
            // bloco de código
        }
        desvio condicional composto
        if (condição){
            // bloco de código
        } else {
            // bloco de código
        }
    desvio condicional encadeado
        if (condição){
            // bloco de código
        } else if (condição){
            // bloco de código
        } else {
            // bloco de código
        }
    desvio condicional múltiplo:
        switch (expressão){
            case valor1:
                // bloco de código
                break
            case valor2:
                // bloco de código
                break
            default:
                // bloco de código
        }
    desvio condicional aninhado
        if (condição){
            if (condição){
                // bloco de código
            } else {
                // bloco de código
            }
        } else {
            // bloco de código
        }

lembrando id é com a # e class é com ponto para o css

condições multiplas 
    switch (expressão){
        case valor1:
            // bloco de código
            break
        case valor2:
            // bloco de código
            break
        default:
            // bloco de código
    }
    o break é obrigatorio para que o programa não continue executando os outros cases
    muito util em valores pontuais
    só funciona com int e string
    nao é mt bom para intervalos
    

    exercicios:
        centralizar com js:
            <div id="msg">
                <p>Olá mundo!</p>
            </div>
            <script>
                var d = window.document.getElementById('msg')
                d.style.textAlign = 'center'
            </script>

        importar imagem em js:
            <div id="msg">
                <p>Olá mundo!</p>
            </div>
            <script>
                var d = window.document.getElementById('msg')
                d.style.textAlign = 'center'
                d.innerHTML = '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">'
            </script>
        ou:
            <div id="msg">
                <p>Olá mundo!</p>
            </div>
            <script>
                var d = window.document.getElementById('msg')
                d.style.textAlign = 'center'
                var i = window.document.createElement('img')
                i.src = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
                d.appendChild(i)
            </script>
        ou:
            var img=document.createElement('img')
            img.src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            document.body.appendChild(img)
            

        
