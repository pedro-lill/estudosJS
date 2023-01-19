function contar(){
    let inicio = document.getElementById('txtinit')
    let fim = document.getElementById('txtend')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ 
        window.alert("Erro. Faltam dados cupincha!")
    }else{
        res.innerHTML = "Contando... <br>"
        let i = Number(inicio.value)
        let f = Number (fim.value)
        let p = Number(passo.value)

        if(i<f){
            for(let c = i; c<=f; c+=p){
                res.innerHTML += `${c}\u{1F449}`
            }
           
        }
        else{
            for(let c = i; c>=f; c-=p){
                res.innerHTML += `${c}\u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
}