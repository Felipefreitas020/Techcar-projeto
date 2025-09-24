const carros = require('./Carros');

class Strada extends carros {
    constructor(descricao){
    super(descricao)
    }

    acessoPainel(){
        return `
            A Fiat Strada é uma picape compacta, líder de vendas no Brasil há mais de duas décadas, reconhecida pela robustez e versatilidade. 
            Sua capacidade de se adaptar tanto para o trabalho pesado quanto para o uso diário, com opções de cabine simples
            e cabine dupla, a torna uma escolha popular entre diferentes perfis de consumidores, com o motor 1.3 e 1.0 Turbo  versões Endurance, Freedom, Volcano 👍`
    }
}

module.exports = Strada;
