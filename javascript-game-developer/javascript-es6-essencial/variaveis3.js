(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        let test = 'Valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();