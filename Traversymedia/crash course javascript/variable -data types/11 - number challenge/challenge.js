//esse segundo desafio do traversy envolve criar duas variaveis que se chamam x e y e que recebam um numero aleatorio depois eu tenho que fazer calculos com estas variaveis aleatórias e imprimir no console dessa forma (20 + 3 = 23)

let x = Math.round(Math.random() * 100 + 1)

let y = Math.round(Math.random() * 50 )

let soma = `${x} + ${y} = ${x + y}`
let subtracao = `${x} - ${y} = ${x - y}`
let multiplicacao = `${x} * ${y} = ${x * y}`
let divisao = `${x} / ${y} = ${x / y}`
let resto = `${x} % ${y} = ${x % y}` 

console.log(soma, subtracao, multiplicacao, divisao, resto)