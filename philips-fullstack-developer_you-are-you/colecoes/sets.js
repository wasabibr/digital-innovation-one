const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueElements(array) {
	let unique = new Set(array);
    // Também pode ser
    // const unique = new Set(array);

	return [...unique];
}

console.log(uniqueElements(arr));