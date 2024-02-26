let pessoa = {
    nome: 'anthony' , idade: 17 , cidade: 'são paulo'
}

var chaves = Object.keys(pessoa)
console.log(chaves)


let carro = {
    marca: 'chevrolet',
    modelo: 'camaro',
    ano: 2024,
    cor: 'preto'
}

for(let chave in carro){
    console.log(chave + ": " + pessoa[chave]);
}

