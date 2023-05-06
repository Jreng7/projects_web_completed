


let valorConta = parseFloat(prompt('Digite o valor da conta: '))
let gorjeta = parseFloat(prompt('Digite a gorjeta (decima)%: '))

gorjeta = (valorConta * gorjeta) / 100

let valorTotal = valorConta + gorjeta

alert(`O valor total com gorjeta é de $${valorTotal}`)