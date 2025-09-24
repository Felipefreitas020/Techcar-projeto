const Onix = require('./class/onix')
const Polo = require('./class/polo')
const Strada = require('./class/Strada')

const onix = new Onix("Onix LT Turbo")
const polo = new Polo("Polo Comfortline")
const strada = new Strada("Strada Volcano")

const carros = [
  { nome: "Onix", objeto: onix },
  { nome: "Polo", objeto: polo },
  { nome: "Strada", objeto: strada }
]

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("Escolha um carro:")
carros.forEach((carro, i) => {
  console.log(`${i + 1}. ${carro.nome}`)
})

readline.question("\nDigite o número do carro: "), (opcao) => {
  const escolha = parseInt(opcao) - 1
}

  if (escolha >= 0 && escolha < carros.length) {
  console.log("\n=== Resultado ===")
  console.log(carros[escolha].objeto.acessoPainel())
} else {
  console.log("Opção inválida!")
}

readline.close()
