function gerar(){
    var n = document.getElementById("numero").value;
    var c = 0;
    
    if(n<1){
        window.alert("Erro. Digite um numero maior ou igual a 1");
    }
    else{
        var tab = document.getElementById("numero")
        res.innerHTML = "";
        while (c<=10){
            var item = document.createElement("option");
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`;
            res.appendChild(item);
            c++;
        }
    }
}