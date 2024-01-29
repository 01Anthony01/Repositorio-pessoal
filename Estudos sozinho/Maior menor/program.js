var res = document.getElementById('res')
function verificarmaioridade(idade){
    if(idade <= 17){
        return true //menor
    }else{
        return false //maior
    }
}

var idade = Number(prompt('diga sua idade'))
var resultado = verificarmaioridade(idade) 
if(resultado){
    res.innerHTML = `voce é de menor`
}else{
    res.innerHTML =  `voce é de maior`
}
