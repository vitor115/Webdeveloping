/*
PROMISSE SIMPLES USANDO THEN PARA QUANDO CONCLUIR CATCH PARA PEGAR O ERRO DE REJECT E FINALLY PARA DEPOIS DA PROMESSA
console.log('pedir uber')

let aceitar = true
const promessa = new Promise((resolve, reject) => {
    if (aceitar){
        return resolve('pedido aceito')
    }
    return reject('pedido negado')
})

console.log('aguardando resposta')

promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(()=> console.log("promessa finalizada"))
 */

/* CONECTANDO NA API DO GITHUB SEM BIBLIOTECA 

fetch('https://api.github.com/users/vitor115')
.then(response => response.json())
.then(data => fetch(data.repos_url))
.then(res=> res.json())
.then(d => console.log(d))
.catch(err => console.log(err)) */

import axios from 'axios'


import axios from "axios";
axios
  .get("https://api.github.com/users/vitor115")
  .then(response => axios.get(response.data.repos_url))
  .then(repos => console.log(repos.data))
  .catch((error) => console.log(error));

Promise.all([
  axios.get("https://api.github.com/users/vitor115"),
  axios.get("https://api.github.com/users/vitor115/repos")
]).then((responses) => {
  console.log(responses[0].data.login);
  console.log(responses[1].data.length);
});
  