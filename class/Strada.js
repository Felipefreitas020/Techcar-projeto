const Carros = require('./Carros')

class Strada extends Carros {
    constructor() {
        super(
            "Strada ","A Fiat Strada é uma picape compacta, líder de vendas no Brasil há mais de duas décadas, reconhecida pela robustez e versatilidade." 
        );
    }

    acessoPainel() {
        return `
${this.nome}: ${this.descricao}
Sua capacidade de se adaptar tanto para o trabalho pesado quanto para o uso diário, com opções de cabine simples e cabine dupla, a torna uma escolha popular entre diferentes perfis de consumidores, com motor 1.3 e 1.0 Turbo, versões Endurance, Freedom e Volcano. 👍`
    }
}

module.exports = Strada;
