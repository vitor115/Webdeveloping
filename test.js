document.getElementById() // ==> retorna um element
document.getElementsByClassName() // ==> retorna um HTMLColletion
document.getElementsByTagName() // ==> retorna um HTMLColletion
document.querySelector() // ==> retorna um element
document.querySelectorAll() // ==> retorna um Nodelist

document.querySelector(".teste").innerHTML += '<span> "hello world"</span>' // adiciona o trecho de HTML ao primeiro elemento que apresentar a classe teste
document.querySelector(".teste").innertext += 'hello world' // adiciona o trecho de texto ao primeiro elemento que apresentar a classe teste

const element = document.querySelector('header') // encontra o header
element.setAttribute('id', 'batata') // adiciona o id = 'batata' ao elemento

element.removeAttribute('id') // remove um atributo do elemento
element.style.backgroundColor = "#ffffff" //altera os estilos de um elemento inline o mesmo que colocar um style="" no HTML

element.classList.add("active") // adiciona uma classe (classe "active" já criada no arquivo css) a algum elemento
element.classList.remove("active")// remove uma classe (já criada no arquivo css) a algum elemento
element.classList.toggle("active")// adiciona ou remove uma classe (depende se ela ja tiver a classe ou nao)

/// Parentesco

//Pais
element.parentElement // ambos pegam os pais do elemento escolhido
element.parentNode

//Filhos
element.childNodes // Nodelist de todos os filhos (espaços vazios no código são impressos como text)
element.children // HTMLColection de todos os filhos e elimina espaço
element.firstChild // eleemnt do primeiro filho e leva em conta espaços vazios como text
element.firstElementChild // element do primeiro filho e NÃO leva em conta espaços vazios como text
element.lastChild // eleemnt do ultimo filho e leva em conta espaços vazios como text
element.lastElementChild // element do ultimo filho e NÃO leva em conta espaços vazios como text

//Irmãos
element.nextSibling
element.nextElementSibling
element.previousSibling
element.previousElementSibling

/// Criação e Inserção de Elementos

const div = document.createElement('div'); //cria um elemento div
div.innerText = 'Hello World' // adiciona o texto hello world no elemento

// append prepend
const body = document.querySelector('body') // acha o body
body.append(div) // coloca o elemento div como o ultimo filho do body
body.prepend(div) // coloca o elemento div como o primeiro filho do body
const header = document.querySelector('body header') // cria uma variavel que acha o elemento header que é filho de um body
body.insertBefore(div, header ) // adiciona o div antes do header (usado para inserir no meio dos filhos)
body.insertBefore(div, header.nextSibling) // outro exemplo: adiciona o div depois do header (não existe insertAfter)

///Eventos
// Pode ser colocado diretamente no HTML ou no javascript a partir de inserção no HTML

// Dois jeitos de fazer no javascript
// Primeiro
body.onclick = function(){ //adiciona ao body o componente on click que ativa a função que imprime o Hello Click
    console.log("Hello Click") //OBS utilizando esse metodo ele só vai executar a ultima função que ele achar, ou seja se ele achar outra chamada onclick ele vai prioriza-la
}

//Segundo
body.addEventListener('click', print) //Executa todas as funções do eventListener mesmo que haja outros mais abaixo

function print(){
    console.log("clicou")
}

// Argumento event
const input = document.querySelector("body input")
input.onkeydown = function(event){
    console.log(event) // traz todas as funcionalidades desse evento
}
