import React from "react";
import styles from "./DisplayFightersPokemon.module.css";
import { getPokemonAPI } from "../utilFunctions/getPokemonAPI";

const DisplayPokemon = ({
	pokemon,
	pokemonName,
	setPokemon,
	state,
	setPokemonMove
}) => {
	React.useEffect(() => {
		if (pokemonName) {
			getPokemonAPI(pokemonName).then((data) => {
				setPokemon({
					pokemonName1: data.name,
					moveName1: data.moves[0].move.name,
					moveName2: data.moves[1].move.name
				});
			});
		} else {
			alert(
				"Oops! there isn't a pokemon with that name, please enter a valid pokemon"
			);
		}
	}, [pokemonName, setPokemon, state]);

	const { moveName1, moveName2, pokemonName1 } = pokemon;

	return moveName1 && moveName2 ? (
		<div>
			Pokemon Move
			<form>
				<select
					name={pokemonName1}
					onChange={(event) => {
						event.preventDefault();
						setPokemonMove(event.target.value);
					}}
					className={styles["pokemon-move--form-select"]}
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
