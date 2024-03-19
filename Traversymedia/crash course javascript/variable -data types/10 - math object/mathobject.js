let X

X = Math.sqrt(25)//esse método retorna a raiz quadrada de um número
X = Math.abs(-7)//esse método so retorna o número n importa se ele é negativo ou positivo, sempre vai retornar so o numero
X = Math.round(9.5)//esse método arredonda um número 

X = Math.ceil(3.3)//esse método sempre vai arredondar um número pra cima independente se ele deveria ir para baixo

X = Math.floor(3.9)// já esse é o contrario sempre vai arredondar para baixo

X = Math.pow(2 , 3)// esse método retorna o valor da conta nesse caso seria 2 elevado a 3 que da 8

X = Math.min(4 ,9 , 1)// esse método sempre retorna o menor número que tiver ali

X = Math.max(4, 10 , 35)// esse método sempre retorna o maior valor que tiver ali

//para utilizar o rando para obter numeros inteiros segue a solução do traversy

let y = Math.floor(Math.random() * 100 + 1 )// colocando o objeto math em uma variavel podemos multiplicar ele por 10 assim teremos numeros que passa de 1, entao pode vir 3.553 2.22 aleatórios.

//solucao do traversy para obter numeros inteiros foi diferente da minha ele usou o metodo floor() para arredondar os numeros para baixo, ja eu utilizei o parseInt para converter os valores para inteiros as duas formas estao corretas e é isso

X = Math.random();//isso aqui literalmente gera números aleatórios entre 0 e 1

console.log(parseInt(y));// e colocando essa váriavel em no método parseInt obtemos um número inteiro aleatório de 1 a 10