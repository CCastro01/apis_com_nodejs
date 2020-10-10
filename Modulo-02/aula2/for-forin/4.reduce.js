const { obterPessoas } = require('./service')

async function main(){
    try{
        const { results } = await obterPessoas(`a`)
        const pesos = results.map(item => parseInt(item.height))
        console.log('pesos',pesos)
        //[20.2, 30.3, 40.5] = 0
        const total = pesos.reduce((anterior, proximo) => {
            return anterior + proximo
        })
        console.log('total', total)

    }
    catch(error){
        console.error('Deu um probleminha em:  ', error)
    }
}   

main()