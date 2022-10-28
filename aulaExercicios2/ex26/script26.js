function contar(){
    var inicio = document.getElementById('txtinit')
    var fim = document.getElementById('txtend')
    var passo = document.getElementById('txtpass')
    var res = document.getElementById('res')

    if(inicio.value.legth == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHtml = 'Iniciando contagem: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }else if(i<f){
            //contagem crescente
            for(var t = i; t<=f; t+=p){
                res.innerHTML += `${t} \u{1F449}`
            }

        }else if(i>f){
            // contagem regressiva
            for (var t = i; t>= f; t-=p){
                res.innerHTML += `${t} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F47D}`
    }
}