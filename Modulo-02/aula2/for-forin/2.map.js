const service = require('./service')

// criando o próprio .map 
Array.prototype.meuMap = function (callback){
    const novoArrayMapeado = []
    for(let i=0; i <= this.length - 1; i++){
        const resultado = callback(this[i], i)//aqui, o this é a lista
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado
}


async function main(){
    try {
        const results = await service.obterPessoas(`a`)
        const names = []

        // results.results.forEach(function(item){
        //     names.push(item.name)
        // })
        // console.log('names', names)


        // const names2 = results.results.map(function (pessoa){
        //     return pessoa.name
        // })
        // console.log('names2', names2)


        // const names3 = results.results.map(pessoa => pessoa.name)
        // console.log('names3', names3)

        const namesMP = results.results.meuMap(function(pessoa, indice){
            return `[${indice}] ${pessoa.name}`
        })
        console.log('namesMP', namesMP )

    } catch (error) {
        console.log(`DEU RUIM`, error)
    }
}

main()