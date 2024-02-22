function verificaridade(idade){
   if(idade >= 18){
        return true
   }else{
        return false
   }
}

let idade = 19
let verificador = verificaridade(idade)

if (verificador){
    console.log('voce é maior de idade')
}else{
    console.log('voce é menor de idade')
}