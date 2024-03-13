// valores primitivos são armazenados na pilha
const name = 'john'
const age = 30

// valores de referencia são adicionados na pilha
const person = {name: 'brad', 
                age:    34}

// exemplo 1
let newname = name
console.log(name , newname)

// exemplo2
let newperson = person
console.log(person , newperson)

newperson.age = 50
console.log(person , newperson)