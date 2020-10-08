const service = require('./service')

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


        const names3 = results.results.map(pessoa => pessoa.name)
        console.log('names3', names3)

    } catch (error) {
        console.log(`DEU RUIM`, error)
    }
}

main()