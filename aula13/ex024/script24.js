function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.legth == 0 || fAno.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'img/criancaH.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovemH.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'img/homem.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'img/senhor.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                //crianca
                img.setAttribute('src', 'img/criancaM.jpg')
            }else if(idade<21){
                //jovem
                img.setAttribute('src', 'img/jovemM.jpg')
            }else if(idade<50){
                //adulto
                img.setAttribute('src', 'img/mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'img/senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}