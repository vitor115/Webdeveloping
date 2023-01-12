/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F



let grade = 45;

function convertGrade(){
    if (grade >=90 && grade <=100){
        grade = "A"
    }else if (grade >=80 && grade <=89){
        grade = "B"
    }else if (grade >=70 && grade <=79){
        grade = "C"
    }else if (grade >=60 && grade <=69){
        grade = "D"
    }else if (grade >=0 && grade <60){
        grade = "F"
    }else{
        throw "Valor inválido"
    }
    console.log(grade)
}

try {
    convertGrade()
}catch (e){
    console.log(e)
}
console.log(grade)

/////////////////////////////

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
A p

let gastos = {
    receitas: [1, 1, 1, 1, 1, 1],
    despesas: [1, 1, 1, 1, 1, 1],
    saldoPositivo: function(receitas, despesas){
        let totalpos = 0;
        let totalneg= 0;
        for(dinheiro of this.receitas){
            totalpos = totalpos + dinheiro
        }
        console.log("dinheiro positivo: " + totalpos)
        for(dinheiro of this.despesas){
            totalneg = totalneg + dinheiro
        }
        console.log("dinheiro negativo: " + totalneg)
        if(totalpos - totalneg < 0){
            return false;
        }else{
            return true;
        }
    },
    teste: function(){
        let total = 0;
        for(x of this.receitas){
            console.log(x)
            total = x + total 
        }
        console.log(total)
    }
}

console.log(gastos.saldoPositivo())

///////////////////////////////////////////

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32


function transformDegree(temp){
    let sign;
    if(temp.toUpperCase().includes("C")){
        sign = "C"
        temp = Number(temp.replace("C", ""))
        return(1.8*temp + 32 + "F")
    } else if(temp.toUpperCase().includes("F")){
        sign = "F"
        temp = Number(temp.replace("F", ""))
        return ( (temp-32)*5/9 + "C")
    } else {
        throw "Sinal não identificado"
    }
}

try{
    console.log(transformDegree("20C"))
} catch(e){ 
    console.log(e)
}


*/

/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

console.log(booksByCategory.length)
for(let category of booksByCategory){
    console.log("Total de livros da categoria: "+ category.category)
    console.log(category.books.length)
}

function countAuthors(){
    authors = []
    for(let category of booksByCategory){
        for(let books of category.books){
            if(!authors.includes(books.author)){
                authors.push(books.author)
                //console.log(books.author)
            }else{
                //console.log("repetido: " +books.author)
            }
        }
    }
    console.log("número de autores: "+ authors.length)
}

countAuthors()

function showAuthorBooks(name){
    autBooks=[]
    for(let category of booksByCategory){
        for(let books of category.books){
            if(books.author == name){
                autBooks.push(books.title)
            }
        }
    }
    console.log(`Livros do autor ${name}: ${autBooks.join(", ")}`)

}

showAuthorBooks("Augusto Cury")