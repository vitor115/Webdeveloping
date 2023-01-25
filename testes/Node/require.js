// 

const myModule = require('./exports') //require ira exportar funçoes  de outro arquivo

console.log("Oi " + myModule("--name") + " "+ myModule("--greetings"))
// console.log(process.argv)//fala as informações do processo que está rodando no Node