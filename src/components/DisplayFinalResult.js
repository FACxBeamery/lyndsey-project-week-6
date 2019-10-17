import React from "react";
import { getPokemonAPI } from "../utilFunctions/getPokemonAPI";

const DisplayFinalResult = ({
	finalPokemon,
	finalPokemonName,
	setFinalPokemon,
	state,
	pokemonMove,
	setPokemonMove
}) => {
	React.useEffect(() => {
		getPokemonAPI(finalPokemonName).then((data) => {
			setFinalPokemon({
				pokemonName1: data.name,
				moveName1: data.moves[0].move.name,
				moveName2: data.moves[1].move.name
			});
		});
	}, [finalPokemonName, setFinalPokemon, state]);
	const { moveName1, moveName2, pokemonName1 } = finalPokemon;

	return finalPokemon ? (
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

export default DisplayFinalResult;
