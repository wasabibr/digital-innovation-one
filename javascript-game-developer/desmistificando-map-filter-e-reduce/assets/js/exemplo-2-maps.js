const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 5
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 3
    },
    {
        name: 'Ponyo',
        type: 'fish',
        age: 5,
        weight: 0.01
    },
    {
        name: 'bolinha',
        type: 'dog',
        age: 8,
        weight: 30
    },
    {
        name: 'mingal',
        type: 'cat',
        age: 1,
        weight: 2
    },
    {
        name: 'pé de pano',
        type: 'horse',
        age: 3,
        weight: 130
    }
]

/*
    * Map
    * Retorna um novo array com a mesma quantidade
    *  de elementos que a array inicial
*/

// outra opção de sintaxe
const eMenorQueCinco = (numero) => {
    return numero < 5;
}

const petNames = pets.map((pet) => {
    return pet.name;
});

console.log(petNames);