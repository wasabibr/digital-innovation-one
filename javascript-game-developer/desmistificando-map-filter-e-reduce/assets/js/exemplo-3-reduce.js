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
        weight: 1
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
const totalWeight = pets.reduce((total, pet) => {
    return total + pet.weight
}, 0)
*/

/*
const totalWeight = pets.reduce((total, pet) => {
    if(pet.type !== 'dog') return total

    return total + pet.weight
}, 0)
*/

const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, {totalAge: 0, totalWeight: 0})

console.log(totalWeight)


