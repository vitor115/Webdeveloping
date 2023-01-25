const { EventEmitter } = require('events') // Faz um emissor de eventos
const ev = new EventEmitter() // cria uma constante para o emissor de eventos

// Ouve o evento saySomtheing e executa uma função utilizando (ou não) os argumentos
ev.on('saySomething', (name, name2) => { //Se usar ev.once ele só executa uma vez
    console.log('Eu ouvi você', name + " e "+ name2)

})

ev.emit('saySomething', "Vitor", "Jorge") // emite o evento saySomething com o argumento Vitor e Jorge