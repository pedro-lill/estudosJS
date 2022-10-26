function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 6){
        img.src = 'img/madrugada.jpg'
        document.body.style.background = '#000000'
    }else if(hora <12){
        img.src = 'img/manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora <= 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }
}