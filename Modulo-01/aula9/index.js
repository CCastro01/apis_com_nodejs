const EventEmitter = require('events')

//criando nossa própria classe que extende todos os métodos da EventEmitter 
class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor() //instanciando uma classe
const nomeEvento =  'usuario:click' //criando um manipulador de eventos

meuEmissor.on(nomeEvento, function(click){
    console.log('um usuario clicou', click)
})

meuEmissor.emit(nomeEvento,'na barra de rolagem')
meuEmissor.emit(nomeEvento,'no ok')

let count = 0
setInterval(function(){
    meuEmissor.emit(nomeEvento, 'no botão' + ( count++))
}, 1000)