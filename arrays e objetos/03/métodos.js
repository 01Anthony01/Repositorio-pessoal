//VOU VER AQUI ALGUNS MÉTODOS UTEIS PARA USAR COM ARRAYS 
//.forEach()
//Caso você precise executar algum código para cada elemento do Array, executar um forEach é muito mais simples do que criar um for ou while, já que não precisamos declarar variáveis de controle.

let myhtml = '<ul>'

let numberlist = [2 , 4 , 5 , 6 , 3]

numberlist.forEach((number , index , array) => {
    myhtml += `<li>${number}</li>`;
})

myhtml += '</ul>'

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
    user.name = 'victoria' //eu posso mexer em todas as propriedades que tiver e alterar os valores
    return user;
})

console.log(newuserlist)