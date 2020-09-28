/*
 0 Obter um usuario
 1 Obter o numero de telefone de um usuario a partir de seu Id
 2 Obter o endereco do usuario pelo Id
 */

function obterUsuario(callback) {
        setTimeout(() => {
            return callback(null,{
                id: 1,
                nome: "Aladin",
                dataNascimento: new Date()
            })
        }, 1000);

}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            telefone: '994856142',
            ddd: 85
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: "dos bobos",
            numero: 0
        })
    }, 2000);
}





function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    //null || 0 || 0 === false
    if (error) {
        console.error("Deu ruim em Usuario", error)
        return
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
        if (error1) {
            console.error("Deu ruim em Telefone", error1)
            return
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
            if (error2) {
                console.error("Deu ruim no Endereço", error2)
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd})${telefone.telefone} 

            `)

        })
    })
})

// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)


