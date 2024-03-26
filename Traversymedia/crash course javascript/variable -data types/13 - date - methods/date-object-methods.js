let x
let d = new Date()

x = d.toString()

x = d.getTime()
x = d.valueOf()

x = d.getFullYear()//esse metodo retorna só o ano
x = d.getMonth() + 1 //ja esse pega mes, ele retorna um mes atrasado pq é baseado nas chaves do objeto ent comeca pela 0, se eu quiser janeiro q é o mes 1 eu tenho que colocar 0, para resolver isso eu poderia adicionar mais 1 no objeto/metodo

x = d.getDate()//esse metodo retorna o dia do mes
x = d.getDay()//ja esse retorna o dia da semana
x = d.getHours()// ja esse retorna o horário
x = d.getMinutes()//ja esse retorna os minutos
x = d.getSeconds()//esse retorna os segundos
x = d.getMilliseconds()//esse retorna os milisegundos ja ta autoexplicativo

//existem situaçoes em que construimos uma data atraves desses métodos

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()} ${d.getMilliseconds()} `

x = Intl.DateTimeFormat('en-US').format(d)//essa aqui é a primeira API que eu utilizo em um código, e o traversy q me mostrou ela é mais poderosa do que o objeto Date,  nela especificamos o local em q estamos e ela mostra da a data exatamente, sem muito esforço

x = Intl.DateTimeFormat('default' , {month: 'long'} ).format(d)//vai simplesmente pegar o lugar q eu to esse "default"
//tambem podemos obter, so o mes, ano ou dia por essa API, basta fazer do jeito q esta ali

//outra forma mais curta de se fazer que da no mesmo q essa API é utilizar o método localestring()

x = d.toLocaleString('en-US' , 
{month: 'short',
 weekday: 'long',
 year: 'numeric',
 day: 'numeric',
 hour: 'numeric',
 minute: 'numeric',
 second: 'numeric',
 timeZone: 'America/New_York',





} )//dessa forma
    

console.log(x);