const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function caixaalta (obj){
    obj.nome = objeto.nome.toUpperCase()
    obj.profissao = objeto.profissao.toLocaleUpperCase()
    obj.username = objeto.username.toLocaleUpperCase()
    obj.senha = objeto.senha.toLocaleUpperCase()
    return obj
}

console.log(caixaalta(objeto))


function corrido (texto){
    texto = (`${objeto.nome}, ${objeto.profissao}, ${objeto.username}, ${objeto.senha}`)
    return texto}

    console.log(corrido(objeto))


const passando = ((objeto, corrido) => {
 corrido = objeto
 return corrido})

 console.log(passando)
