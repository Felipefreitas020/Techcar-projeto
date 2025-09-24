const carros = require('./Carros');

class Polo extends carros {
    constructor(descricao){
    super(descricao)
    }

    acessoPainel(){
        return `
            O Volkswagen Polo é um dos principais concorrentes do Chevrolet Onix no mercado de hatches compactos, oferecendo um equilíbrio entre dirigibilidade, tecnologia 
            e economia com versões (Track, MPI,TSI, Comfortline, Highline, GTS ) 👍`
    }
}

module.exports = Polo;
