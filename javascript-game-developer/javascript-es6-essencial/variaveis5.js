// Não podemos alterar o valor
const name = 'Jefferson';

// Não podemos fazer o objeto "apontar" para outro lugar
const user = {
    name: 'Jefferson'
}

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome';

const persons = [
    'Jefferson',
    'Monik',
    'Alice'
];

// Podemos adicionar novos itens
persons.push('Erika');

// Podemos remover algum item
persons.shift();

console.log(persons);