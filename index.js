const prompt = require("prompt-sync")()

const Onix = require("./class/Onix")
const Polo = require("./class/Polo")
const Strada = require("./class/Strada")

const carros = [new Onix(), new Polo(), new Strada()]

console.log("Escolha um carro:")
carros.forEach((carro, i) => {
  console.log(`${i + 1}. ${carro.nome}`)
})

const resposta = prompt("Digite o número: ")
const indice = parseInt(resposta) - 1

if (indice >= 0 && indice < carros.length) {
  console.log(`Você escolheu: ${carros[indice].acessoPainel()}`)
} else {
  console.log("Opção inválida!")
}
