//VOU VER AQUI ALGUNS MÉTODOS UTEIS PARA USAR COM ARRAYS 
//.forEach()
//Caso você precise executar algum código para cada elemento do Array, executar um forEach é muito mais simples do que criar um for ou while, já que não precisamos declarar variáveis de controle.

let myhtml = '<ul>'

let numberlist = [2 , 4 , 5 , 6 , 3]

numberlist.forEach((number , index , array) => {
    myhtml += `<li>${number}</li>`;
})

myhtml += '</ul>'
console.log(myhtml)

//.map()
//Nós utilizamos o .map() quando queremos fazer alguma modificação nos elementos de um Array.

const userlist = [
    {
        name: 'joao',  credit: 600
    }
    ,
    {       
         name: 'maria', credit: 760
    }
]

console.log(userlist)


const newuserlist = userlist.map((user , index , array) => {
    user.credit += 100
   // user.name = 'victoria' //eu posso mexer em todas as propriedades que tiver e alterar os valores depois eu tenho que ver se da pra adicionar tambem
    return user;
})

console.log(newuserlist)

//No exemplo acima alteramos o valor de uma propriedade de cada um dos elementos do Array. Na última linha nós precisamos executar o comando return para indicar o que será retornado para o Array. No final teremos um novo Array.

//Também pode ser interessante se quisermos alterar a estrutura dos objetos do Array. Podemos pegar o exemplo de cima: suponha que a gente agora queira um Array com o nome de todos os usuários da nossa lista. Teríamos o seguinte código:

const lista_de_idades_e_nomes = [
    {nome: 'anthony' , idade: 17},
    {nome: 'victoria' , idade: 17}
]

const nova_lista = lista_de_idades_e_nomes.map((user , index , array) => {
    return user.nome
})

console.log(lista_de_idades_e_nomes)
console.log(nova_lista)

//Outro exemplo bem simples, aproveitando a simplicidade das Arrow Functions: dobrar o valor dos números de um Array:

const numero = [1, 4 , 6 , 7]
const novosnumero = numero.map((number) => {
    return number * 2
})

console.log(numero)
console.log(novosnumero)

//.filter()
//Como o próprio nome indica, serve para filtrarmos os elementos de um Array. Passamos para ele uma função. Se essa função retornar true, o elemento será inserido no novo Array que será criado. Se a função retornar false, o elemento será ignorado.

const listadeusers = [
	{name: 'João', credit: 600},
	{name: 'Maria', credit: 900},
	{name: 'Carlos', credit: 300},
	{name: 'Vanessa', credit: 200},
];

const new_list = listadeusers.filter((user , index , array) => {
    return user.credit > 500
})

console.log(listadeusers)
console.log(new_list)

