import React from "react";
import styles from "./DisplayFinalBattle.module.css";
import { getPokemonAPI } from "../utilFunctions/getPokemonAPI";

const DisplayFinalBattle = ({
	finalPokemon,
	finalPokemonName,
	setFinalPokemon,
	state,
	setFinalPokemonMove
}) => {
	React.useEffect(() => {
		if (finalPokemonName) {
			getPokemonAPI(finalPokemonName).then((data) => {
				setFinalPokemon({
					finalPokemonName1: data.name,
					finalMoveName1: data.moves[0].move.name,
					finalMoveName2: data.moves[1].move.name
				});
			});
		}
	}, [finalPokemonName, setFinalPokemon, finalPokemon, state]);
	const { finalMoveName1, finalMoveName2, finalPokemonName1 } = finalPokemon;

	return finalMoveName1 && finalMoveName2 ? (
		<div>
			Pokemon Move
			<form>
				<select
					name={finalPokemonName1}
					onChange={(event) => {
						event.preventDefault();
						setFinalPokemonMove(event.target.value);
					}}
					className={styles["pokemon-move--form-select"]}
				>
					<option hidden disabled selected value>
						{" "}
						-- select a pokemon move --{" "}
					</option>
					<option value={finalMoveName1}>{finalMoveName1}</option>
					<option value={finalMoveName2}>{finalMoveName2}</option>
				</select>
			</form>
		</div>
	) : null;
	// ) : (
	// 	<h3>Oops! Looks like that pokemon doesn't exist, try another name.</h3>
	// );
};

export default DisplayFinalBattle;
