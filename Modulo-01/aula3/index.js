/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu Id
 2 Obter o endereco do usuario pelo Id
 */

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date()
        })
    }, 1000);
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(error, {
            telefone: '994856142',
            ddd: 85
        })
    }, 2000);
}

function obterEndereco(idUsuario) {

}

function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    //null || 0 || 0 === false
    if(error){
        console.error("Deu ruim mano", error)
        return
    }
})
// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)


