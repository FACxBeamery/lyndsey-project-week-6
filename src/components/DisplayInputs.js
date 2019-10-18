import React from "react";
import styles from "./DisplayInputs.module.css";

const DisplayInputs = ({
	setState,
	setPokemonName,
	setFighterName,
	pokemonName,
	fighterName
}) => {
	const [pokemonNameEntered, setPokemonNameEntered] = React.useState("");
	const [fighterNameEntered, setFighterNameEntered] = React.useState("");

	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			setPokemonName(pokemonNameEntered);
			setFighterName(fighterNameEntered);
			setState((state) => state + 1);
			console.log(pokemonName);
			console.log(fighterName);
		}
	};

	const handleOnChange1 = (e) => {
		setPokemonNameEntered(e.target.value);
	};
	const handleOnChange2 = (e) => {
		setFighterNameEntered(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className={styles["form"]}>
			<input
				className={styles["first--form--input"]}
				type="text"
				name="name-query"
				id="name-query"
				placeholder="Enter your name"
				onChange={handleOnChange2}
				value={fighterNameEntered}
			/>
			Please enter your name, warrior
			<input
				className={styles["first--form--input"]}
				type="text"
				name="search-query"
				id="search-query"
				placeholder="Search for a pokemon"
				onChange={handleOnChange1}
				value={pokemonNameEntered}
			/>
			<button
				className={styles["first--button"]}
				type="submit"
				id="submit-request"
			>
				Find me it!
			</button>
		</form>
	);
};
// };
export default DisplayInputs;
