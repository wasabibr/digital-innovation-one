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

// Podemos alterar diretamente
persons[1] = 'Maluzinho';

console.log('\nArray após as alterações: ', persons);