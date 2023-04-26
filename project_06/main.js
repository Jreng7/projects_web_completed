
// Index         0       1        2        3
let friends = ['Alan', 'Mark', 'Julia', 'Bella']
console.log(friends[1]) // Pegue o index na posição 1, logo, retornará "Mark"


friends[1] = 'John' // O nome dessa mudança entre "Mark" para "John" é REPLACE.

friends[4] = 'Doe' /* Como não existe index 4, aqui não será replace, mas ADD ITEM
Ou seja, adicionando item ao Array cujo nome é "Friends. Lembrando que
Array em português significa lista. */

console.log(friends[1])