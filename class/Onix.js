const Carros = require('./Carros')

class Onix extends Carros {
    constructor() {
        super(
            "Onix ", "O Chevrolet Onix é um dos carros mais populares do Brasil, conhecido por seu bom custo-benefício, design moderno e tecnologia embarcada." 
        )
    }
    
    acessoPainel() {
        return `
${this.nome}: ${this.descricao}
Ele está disponível nas versões hatch e sedã (LT, LTZ TURBO, RS Turbo, Premier), com opções de motores 1.0 aspirado ou turbo, e diferentes pacotes de equipamentos. 👍`
    }
}

module.exports = Onix
