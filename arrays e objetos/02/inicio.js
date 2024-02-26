//declaracao de array
let alunos = [2 , 4 , 5 , 8 , ,]
                //valores do array

//Nós podemos declarar arrays sem nenhum item e tamanho, ou somente com tamanho definido mas vazio, da seguinte forma
    let numeros = Array(20)
    let idades = []



// Para popular o array, é só atribuir um valor junto ao índice:

alunos[4] = 'anthony'
console.log(alunos[4])

console.log(Array.isArray(numeros))//comando que verificar se um objeto é um array

//Em relação ao nosso exemplo, nós não adicionamos os itens a um índice declarado, portanto o JavaScript inicia do índice 0 e incrementa cada item posterior. Portanto, para exibir um item podemos fazer da seguinte forma:

console.log(alunos[2])

//Para alterar um elemento, basta usar o nome do array com o índice e atribuir o novo valor:

alunos[2] = 'victoria'
console.log(alunos[2])

//Como adicionar um novo elemento a um array?
//Para adicionar um elemento a um array nós utilizamos o método push(), da seguinte forma:

alunos.push('miranda')
console.log(alunos)

//Outro ponto importante que vale ressaltar é que o JavaScript permite um array de elementos de tipos diferentes

console.log(typeof alunos[0])
console.log(typeof alunos[2])

//OBJETOS EM BAIXO ARRAYS EM CIMA.

//Nós utilizamos objetos para agrupar valores que possuem propriedades e funções, podemos por exemplo fazer uma analogia aos objetos do mundo real. Um carro que possui cor e marca, ele também realiza ações como acelerar e frear.

//Para declarar um objeto a sintaxe é bem parecida a que utilizamos para declarar arrays, porém trocamos os [] por {}. Onda as chaves, valores e funções são declaradas entre {}, conforme abaixo:

let carro = {
    modelo: 'Esportivo',//já isso aqui é uma propriedade
    cor: 'amarelo',// isso aqui tambem
    acelerar(){ // isso aqui tambem
        console.log('acelerando....')
    },
    frear(){  //isso aqui nessa linha é um método
        console.log('freando')
    },
    embreagem: () => { console.log('passando a marcha') }

}
console.log(carro.acelerar())//quando uma funçao esta dentro de um objeto n tem como eu simplesmente chamar ela pelo nome como se fosse uma funcao normal, eu tenho que chamar o objeto e depois a funcao.

console.log(carro.embreagem())

//Neste caso declaramos o objeto literal carro, que possui duas propriedades, modelo e cor, que podem ser chamadas de chaves. Declaramos também duas funções, acelerar e frear, que podem ser chamadas de métodos. Vale ressaltar que nós podemos declarar de outras formas as funções: acelerar: function () {}ou utilizando uma arrow function, acelerar: () => {}.

console.log(carro)

//Como acessar as propriedades ou funções de um Objeto?
//Para acessar uma propriedade ou uma função basta utilizarmos o nome do objeto seguido da propriedade/função separada por ponto. Por exemplo:

console.log(carro.modelo)
console.log(carro.cor)

//Outra forma que podemos utilizar para acessar propriedades é utilizando o padrão objeto['propriedade'], o que possibilita usarmos variáveis para estar acessando as propriedades de um objeto.

const modelodocarro = carro['modelo']
console.log(modelodocarro)

//Como alterar e adicionar novas propriedades a um objeto?
//Para adicionar uma propriedade em um objeto no JavaScript é bem simples, basta usarmos a sintaxe de acesso às propriedades porém atribuindo um valor a nova propriedade inexistente, podemos fazer de duas formas:

carro.ano = 2011;
carro['marca'] = 'chevrolet'

console.log(carro)

//Para alterar as propriedades de um objeto basta utilizar a mesma lógica acima, porém com uma propriedade já existente:

carro.modelo = 'modelo simples'
carro['cor'] = 'preto'

console.log(carro)

//Como deletar uma propriedade de um objeto?
//Para deletar basta usarmos o operador delete, seguindo a lógica do objeto.propriedade:

delete carro.marca;
console.log(carro)

//Conclusão
//Neste artigo tivemos o primeiro contato com a manipulação de arrays e objetos no JavaScript, podemos perceber que a linguagem permite trabalhar esses conceitos de forma flexível e eficiente.