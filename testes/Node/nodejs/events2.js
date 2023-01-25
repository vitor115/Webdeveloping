const { inherits } = require('util') // faz as funções herdarem todas as opções do eventmitter
const { EventEmitter } = require('events') // Faz um emissor de eventos

function Character(name){
    this.name = name
}
inherits(Character, EventEmitter)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado`))

console.log('Oh! E agora quem poderá me defender?')
chapolin.emit('help')