import React from "react";
import { getPokemonAPI } from "../utilFunctions/getPokemonAPI";

const DisplayPokemon = ({
	pokemon,
	pokemonName,
	setPokemon,
	state,
	pokemonMove,
	setPokemonMove
}) => {
	React.useEffect(() => {
		getPokemonAPI(pokemonName).then((data) => {
			setPokemon({
				pokemonName1: data.name,
				moveName1: data.moves[0].move.name,
				moveName2: data.moves[1].move.name
			});
		});
	}, [pokemonName, setPokemon, state]);

	const { moveName1, moveName2, pokemonName1 } = pokemon;

	return pokemon ? (
		<div>
			Pokemon Move
			<form>
				<select
					name={pokemonName1}
					onChange={(event) => {
						event.preventDefault();
						setPokemonMove(event.target.value);
					}}
				>
					<option hidden disabled selected value>
						{" "}
						-- select a pokemon move --{" "}
					</option>
					<option value={moveName1}>{moveName1}</option>
					<option value={moveName2}>{moveName2}</option>
				</select>
			</form>
		</div>
	) : null;
};
export default DisplayPokemon;
