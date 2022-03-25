const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const usuarios = new Map();

// Inserindo valores com o método .get
usuarios.set('Jefferson', 'SUDO');
usuarios.set('Monik', 'ADMIN');
usuarios.set('Alice', 'ADMIN');
usuarios.set('Malu', 'USER');
usuarios.set('Erika', 'USER');

console.log(getAdmins(usuarios));