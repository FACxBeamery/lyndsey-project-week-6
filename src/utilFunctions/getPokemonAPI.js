const checkResponse = (response) => {
	if (response.status !== 200) {
		console.log(`error with req status: ${response.status}`);
	} else {
		return response.json();
	}
};

export const getPokemonAPI = (name) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

	return fetch(url)
		.then(checkResponse)

		.catch((err) => {
			throw new Error(
				alert(
					"Look's like a server error on our end, check your network is connected!"
				)
			);
		});
};
