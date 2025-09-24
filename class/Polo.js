const Carros = require('./Carros')

class Polo extends Carros {
    constructor() {
        super(
            "Polo ","O Volkswagen Polo é um dos principais concorrentes do Chevrolet Onix no mercado de hatches compactos, oferecendo um equilíbrio entre dirigibilidade, tecnologia e economia." 
        )
    }

    acessoPainel() {
        return `
${this.nome}: ${this.descricao}
Versões disponíveis: Track, MPI, TSI, Comfortline, Highline, GTS. 👍`
    }
}

module.exports = Polo;
