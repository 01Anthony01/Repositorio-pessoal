let date;

date = new Date() //isso aqui me da a data atual
date = toString()
date = new Date(2022, 3, 22, 12, 30 , 0)//se eu colocar o valor nessa ordem dentro dos parenteses ele me da a data q que eu quiser, ano, mes, dia

// e o mes e baseado nas chaves ou indices por isso quando eu coloco tres ali ele me retorna 04 pq comeca do 0 

//tambem podemos obter um resultado parecido de forma mais facil se utilizarmos a strings

date = new Date('2020-05-29T15:30:00')//dessa forma
date = new Date('01/09/2024 12:00:00')//tambem podemos fazer assim

date = Date.now()//esse método vai retornar quantos milisegundos se passaram desde 1970

date = new Date('01/01/2006')
date = date.getTime()//se fizermos isso poderemos ver quantos milisegundos se passaram desde uma data específica em comparacao a 1970

date = new Date(1136080800000)//tambem podemos colocar um carimbo de datas especifico para obter uma data específica

//como o carimbo de datas é expresso em milisegundos, se quisermos obter segundos podemos fazer dessa forma aqui

date = Math.floor(Date.now() / 60000)


console.log(date);