class Carros {
    #nome
    #descricao

    constructor(nome,descricao){
        this.#nome = nome
        this.#descricao = descricao
    }

    get nome() {
        return this.#nome
    }

    set nome(novoNome) {
        this.#nome = novoNome
    }

    get descricao() {
        return this.#descricao 
    }

    set descricao(novaDescricao ) {
    this.#descricao = novaDescricao 
    }
 acessoPainel(){
        return ""
 }
}


module.exports = Carros;
