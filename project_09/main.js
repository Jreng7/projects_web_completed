
let idade = prompt('Digite a sua idade: ')
let temTitulo = prompt('Você possui título de eleitor? (Sim/Não)')
let idadeMinina = 18

if (idade >= idadeMinina && temTitulo == 'sim') {
    alert('Você pode votar.')
} else if (idade >= idadeMinina && temTitulo == 'não') {
    alert('Você não pode votar, pois não tem título.')
} else if ()