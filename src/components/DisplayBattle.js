import React from "react";
import styles from "./DisplayBattle.module.css";

const DisplayBattle = ({
	fighterMove,
	pokemonMove,
	pokemonName,
	setFinalPokemonName,
	setState
}) => {
	const [
		finalPokemonNameEntered,
		setFinalPokemonNameEntered
	] = React.useState("");
	const handlefinalSubmit = (e) => {
		if (e) {
			e.preventDefault();
			setFinalPokemonName(finalPokemonNameEntered);
			setState((state) => state + 1);
			console.log(pokemonName);
		}
	};
	const finalHandleOnChange1 = (e) => {
		setFinalPokemonNameEntered(e.target.value);
	};

	return pokemonMove.length < fighterMove.length ? (
		<div>
			<h1>WINNER!!!</h1>

			<form onSubmit={handlefinalSubmit}>
				Try another battle
				<input
					type="text"
					name="search-query"
					id="search-query"
					placeholder="Search for a pokemon"
					onChange={finalHandleOnChange1}
					value={finalPokemonNameEntered}
					className={
						finalPokemonNameEntered === ""
							? `${styles["battle--form--input"]} ${
									styles["battle--form--input--error"]
							  }`
							: styles["battle--form--input"]
					}
				/>
				<button
					type="submit"
					id="submit-request"
					className={styles["battle--button"]}
				>
					Final battle
				</button>
			</form>
		</div>
	) : (
		<div>
			<h2>LOSER</h2>
			<form onSubmit={handlefinalSubmit}>
				Wow loser, try another battle
				<input
					type="text"
					name="search-query"
					id="search-query"
					placeholder="Search for a pokemon"
					onChange={finalHandleOnChange1}
					value={finalPokemonNameEntered}
					className={
						finalPokemonNameEntered === ""
							? `${styles["battle--form--input"]} ${
									styles["battle--form--input--error"]
							  }`
							: styles["battle--form--input"]
					}
					required
				/>
				<button
					className={styles["battle--button"]}
					type="submit"
					id="submit-request"
				>
					Final battle
				</button>
			</form>
		</div>
	);
};

export default DisplayBattle;
