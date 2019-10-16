import React from "react";
import Test from "./Test";
import { getPokemonAPI } from "../utilFunctions/getPokemonAPI";

const DisplayInputs = ({ pokemon, setPokemon, setState }) => {
	const [pokemonName, setPokemonName] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		setPokemon(pokemonName);
		setState(1);
		// setPokemon(data.name);
	};
	const handleOnChange = (e) => {
		setPokemonName(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name-query"
				id="name-query"
				placeholder="Enter your name"
			/>
			Please enter your name, warrior
			<input
				type="text"
				name="search-query"
				id="search-query"
				placeholder="Search for a pokemon"
				onChange={handleOnChange}
			/>
			<button type="submit" id="submit-request" className="button">
				Find me it!
			</button>
		</form>
	);
};
// };
export default DisplayInputs;
