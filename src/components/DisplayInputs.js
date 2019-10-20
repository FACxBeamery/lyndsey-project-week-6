import React from "react";
import styles from "./DisplayInputs.module.css";
const fightersDB = require("../fighters");

const DisplayInputs = ({
	setState,
	setPokemonName,
	setFighterName,
	pokemonName,
	fighterName
}) => {
	const [pokemonNameEntered, setPokemonNameEntered] = React.useState(null);
	const [fighterNameEntered, setFighterNameEntered] = React.useState(null);

	const handleSubmit = (e) => {
		if (e) {
			e.preventDefault();
			setPokemonName(pokemonNameEntered);
			setFighterName(fighterNameEntered);
			setState((state) => state + 1);
			console.log(pokemonName);
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
			<label htmlFor="name-query">
				Please enter your name...
				<input
					className={
						fighterNameEntered === ""
							? `${styles["first--form--input"]} ${
									styles["first--form--input--error"]
							  }`
							: styles["first--form--input"]
					}
					type="text"
					name="name-query"
					id="name-query"
					placeholder="Enter your name"
					onChange={handleOnChange2}
					defaultValue={fighterNameEntered}
					required
				/>
			</label>
			<label htmlFor="search-query">
				Choose a pokemon to fight:
				<input
					className={
						pokemonNameEntered === ""
							? `${styles["first--form--input"]} ${
									styles["first--form--input--error"]
							  }`
							: styles["first--form--input"]
					}
					type="text"
					name="search-query"
					id="search-query"
					placeholder="Search for a pokemon"
					onChange={handleOnChange1}
					defaultValue={pokemonNameEntered}
					required
				/>
			</label>
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
