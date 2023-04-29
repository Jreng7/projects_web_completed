
let grade = prompt('Digite a nota do aluno: ')

if (grade > 100) {
    alert('Nota inválida.')
} 

else if (grade >= 90 ) {
    console.log('A nota é: A')
}

else if (grade >= 80 ) {
    console.log('A nota é: B')
}

else if (grade >= 70 ) {
    console.log('A nota é: C')
}

else if (grade >= 60 ) {
    console.log('A nota é: D')
}

else {
    console.log('Aluno reprovado.')
}