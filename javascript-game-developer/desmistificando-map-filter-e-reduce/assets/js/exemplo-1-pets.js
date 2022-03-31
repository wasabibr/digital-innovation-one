const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'Ponyo',
        type: 'fish',
        age: 5
    }
]

// opção de sintaxe
/*const newPets = pets.filter((pets) => {
    return pets.age < 5
})*/

// outra opção de sintaxe
const eMenorQueCinco = (numero) => {
    return numero < 5;
}

const newPets = pets.filter(({age}) => eMenorQueCinco(age));

console.log(pets);

console.log(newPets);