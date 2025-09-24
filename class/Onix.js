const carros = require('./carros');

class Onix extends carros {
    constructor(descricao){
    super(descricao)
    }
    
    acessoPainel(){
        return `
            O Chevrolet Onix é um dos carros mais populares do Brasil, conhecido por seu bom custo-benefício, design moderno e tecnologia embarcada.
            Ele está disponível nas versões hatch e sedã, com  versões (LT, LTZ TURBO, RS Turbo, Premier ) opções de motores 1.0 aspirado ou turbo, e diferentes pacotes de equipamentos. 👍`
    }
}
module.exports = Onix;