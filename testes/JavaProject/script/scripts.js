console.log("hello world");
console.log(`
muitas
linhas com crase

`);

console.log(`texto mais numero ${1+1}`);

let weight = 70;
console.log(typeof weight);

let name = "Vitor";
let age = 22;
let stars = 5.5;
let isSubscribed = false;

let student = {
    name: "Vitor",
    age: 22,
    weight: weight,
    stars: 5.5,
    isSubscribed: false,
}

console.log(student.name + " de idade " + student.age + " pesa " + student.weight)

let students = [];
students = [student]
console.log(students)

const sayMyName = () => {
    console.log("hello")
}

sayMyName();

// Função com construtor
function Person(name) {
    this.name = name
    this.walk= function() {
        return this.name + " está andando"
    }
}
const vitor = new Person("Vitor")
console.log(vitor.walk())

// Objetos já tem funções dentro dele mesmo sem ter definido nada
console.log("Olá".length) // por exemplo essa funcao fala a lenght to string sem ter definido nada
console.log(421.32421.toFixed(2).replace(".",",")) // toFixed(x) diminui a quantidade de digitos apos a virgula e replace() muda algum elemento por poutro
console.log("oi meu nome é vitor".includes("vitor"))
let myArray = "oi meu nome é vitor".split(" ")
console.log(myArray)
myArray = myArray.join(" ")
console.log(myArray)

myArray = ["b", "c", "d"]
console.log(myArray)
myArray.push("e") //adiciona no final
console.log(myArray)
myArray.unshift("a") //adiciona no comeco
console.log(myArray)
myArray.pop()//tira do final
console.log(myArray)
myArray.shift()//tira do comeco
console.log(myArray)
// myArray.splice(x, y) tira y elementos a partir do index x
console.log(myArray.indexOf("d"))

console.log(1===1 ? "ainda bem": "vish") //1 é igual a 1? se sim ainda bem : se nao vish

let expression = "a"
switch(expression) {
    case 'a':
        console.log("a")
        break
    case 'b':
        console.log('b')
        break
    default:
        console.log("oii")
        break
}

function sayMyName2(name = ''){
    if(name===''){
        throw "Nome é Obrigatório" //é o erro que sera mostrado
    }
    console.log("depois do erro")
}

try{ // tenta rodar a funcao e nao para a aplicação
    sayMyName2();
}catch(e){ //se der errado ele printa o erro
    console.log(e)
}

let cel = ["android", "ios", "windowsphone"]
for(let name of cel ){ //For on - faz o for baseado no tamanho do array
    console.log(name)
}

let person = {
    name: "vitor",
    age: "22",
    isbonito: true
}

for(let property in person){
    console.log(property)
    console.log(person[property])

}