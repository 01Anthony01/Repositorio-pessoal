let x;
const name = 'anthony'
x = 'hello, my name is ' +  name

// templates literais
x += ` hi my names is ${name}`

// propriedades e métodos para usar com tipo de dados primitivos string

const s = new String('Hello World')//isso é o que acontece por tras dos panos, quando utilizamos uma propriedade ou um método em um valor primitivos, o javascript meio que envelopa o valor primitivo em um novo valor objeto nesse caso é um array, assim ele guarda no caso das strings cada letra em uma chave, e eu posso acessar cada valor individualmente se eu utlizar as chaves assim como o exemplo abaixo

x = typeof s

x = s.length //propriedade que pode ser usada na string para saber quantas o comprimento da frase

//acess value by key
x = s[0]
// 

x = s.__proto__;

x = s.toUpperCase()
x += s.toLowerCase()

x = s.charAt(4)

x = s.indexOf('H')

x = s.substring(0 , 5)

x = s.slice(0 , 8)//a diferenca é que podemos usar valores negativo no método slice, assim quando a gente usa chaves negativas isso começa do fim

x = '                       hello world'

x = x.trim()// esse método vai apagar todos os espaços q tem em uma string

x = s.replace('World' , 'john')// essa aqui vai trocar as palavras ou strings q eu quiser, apenas preciso selecionar a que quero mudar, depois colocar uma virgua e depois colocar a nova palavra q eu quero mudar

x = s.includes('Hello')// esse método vai retornar true ou false se a string q eu colocar ali dentro existir no objeto, n exatamente a string mas se as letras forem compativeis, tem q estar na mesma ordem

 x = s.valueOf()// esse método vai retornar o valor que esta no objeto , nessa caso é 'hello world'

 x = s.split(' ')//se eu deixar só um espaco entre as aspas, ele dividirá cada letrar em uma string mas se eu colocar dois esaços ele vai pegar todos os espacos que tem na frase e dividir em uma string unica

console.log(x);