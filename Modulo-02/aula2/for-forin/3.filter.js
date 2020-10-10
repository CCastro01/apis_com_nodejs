const { obterPessoas } = require('./service')//extraindo apenas o obterPessoas(desestruturação)


//implementando o próprio filter simulando a função filter
Array.prototype.meuFilter = function(callback){
    const lista = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        //0, "", null, undefined === false
        if(!result) continue
        lista.push(item)
    }
    return lista
}






async function main() {
    try {
        const { results } = await obterPessoas(`a`) //pegando apenas results, de dentro de obterPessoas()
    
        // const familiaLars = results.filter(function(item){
        //     //por padrão precisa retornar um booleano
        //     //para informar se deve manter ou remover da lista
        //     //false => remove da lista
        //     //true => mantem

        //     //não encontrou, retorna -1
        //     //encontrou, retorna a posição no aaray
        //     const result = item.name.toLowerCase().indexOf(`lars`) !== -1
        //     return result
        // })

        // const names = familiaLars.map((pessoa) => pessoa.name)
        // console.log(names)


        const familiaLars = results.meuFilter((item, index, lista) => {     
             console.log(`index: ${index}`, lista.length)
             return item.name.toLowerCase().indexOf('lars') !== -1
        })

    } catch (error) {
        console.error('Deu um probleminha', error)
    }
}

main()