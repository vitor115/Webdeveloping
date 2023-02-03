// Typescript é uma versão do javascript que é tipada para evitar erros ante de rodar o projeto
// Testes no Typescript Playground

import { type } from "express/lib/response";

//Tipos no Typescript

let x: any; // X pode usar qualquer valor possivel (não recomendado)
let y: string; // Podendo ser number, boolean, undefined, null...
y = 2; // <-- TS indicando erro de tipo no y por estar dando um número ondedeveria ser string

//Tipagem Explicita x Implicita

let z: number; //explicita o tipo da variavel como number
z = 10;

let z2 = 10; // esta implicito que é um number pois declarou
z2 = "batata"; //erro ao tentar colocar string num number

//Tipagem para vetor 2 metodos
let numbers: number[]; // metodo 1
let users: Array<string>; // metodo 2

//tipagem de funções Union e retorno
function showIds(Id: string | number): string {
  // uma função que recebe um Id que pode ser string ou (Union) number e retorna uma string
  return "ola seu Id é:" + Id;
}

// T = Type
// S = State
// K = Key
// V = Value
// E = Element
//tipagem de funções com Generic deixa quem esta utilizando a função deifinir qual tipagem ira utilizar
function useState<T>() {
  let state: T;
  function get() {
    return state;
  }
  function set(newValue: T) {
    state = newValue;
  }
  return { get, set };
}

let newState = useState<string>(); //Define o tipo generico ocmo string
newState.get();
newState.set("Vitor");
newState.set(123); // Da erro ao tentar mudar para number ja que o tipo foi definido como string

//para colocar restrições no Generic se utiliza com extends e os tipos permitidos
function useState2<T extends number | string>() {
  let state: T;
}

let newState2 = useState2<boolean>(); // nao permite essa chamada por ser boolean e só permitir string e number
let newState3 = useState2<number>(); // a diferença para o union que uma vez delcarado o tipo nao pode mudar

//Tipando com o Type para quando um tipo repete outros tipos

type IdType = number | string | undefined;

let userId: IdType;
let adminId: IdType;

// consumindo APIs e quan o typescript nao saber o tipo permitido type assertions
type userResponse = {
  id: number;
  name: string;
  avatar: string;
};

let userResponse = {} as userResponse;
userResponse; //<== se digitar "." ele vai aparecer os campos no intelisense

// Passando um tipo de objeto

type Point = {
  x: number;
  y: number;
  name?: string; //propriedade opcional
};

function printCoord(points: Point) {
  console.log(`x = ${points.x}`);
  console.log(`y = ${points.y}`);
}

//intersecção de Tipos

type User = {
  name: string;
  age: number;
};

type Char = {
  nick: string;
  level: number;
};

type PlayerInfo = User & Char; // intersecção
let info: PlayerInfo = {
  //pede a infromação dos 2
  name: "vitor",
  age: 22,
  nick: "vitor115",
  level: 45,
};

//Interface parecido com type e tem o mesmo proposito

interface IBasic {
  //não colocar o "="
  name: string;
}

interface INumber {
  number: number;
}

interface IJoin extends IBasic, INumber {} // Como fazer intersecção em interface
