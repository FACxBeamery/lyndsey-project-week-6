import React from "react";
import { getPokemonAPI } from "../utilFunctions/getPokemonAPI";

const Test = ({ pokemon }) => {
	const [pokemonData, setPokemonData] = React.useState({});
	React.useEffect(() => {
		getPokemonAPI(pokemon).then((data) => {
			setPokemonData(data);
			console.log(data);
		});
	}, []);
	const { name } = pokemonData;
	return pokemonData ? (
		<div>
			<p>{name}</p>
		</div>
	) : null;
};
export default Test;

// abilities: (2) [{…}, {…}]
// base_experience: 63
// forms: [{…}]
// game_indices: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// height: 5
// held_items: []
// id: 7
// is_default: true
// location_area_encounters: "https://pokeapi.co/api/v2/pokemon/7/encounters"
// moves: (91) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// name: "squirtle"
// order: 10
// species: {name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon-species/7/"}
// sprites: {back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png", back_female: null, back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png", back_shiny_female: null, front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", …}
// stats: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
// types: [{…}]
// weight: 90
