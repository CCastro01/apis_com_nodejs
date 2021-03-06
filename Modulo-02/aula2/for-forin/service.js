const axios = require('axios')
const URL = `https://pokeapi.co/api/v2/pokemon`

async function obterPessoas(nome){
    const url = `${URL}/?search=${nome}&format=json`
    const response = await axios.get(url)
    return response.data
}

module.exports = {
    // obterPessoas: obterPessoas
    //se a chave do meu objeto for o mesmo nome do valor, não é necessário passar o valor
    obterPessoas
}