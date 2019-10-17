import React from "react";
import { getPokemonAPI } from "../utilFunctions/getPokemonAPI";

const DisplayPokemon = ({ pokemon, pokemonName, setPokemon, state }) => {
	//const [pokemonMoveEntered, setPokemonMoveEntered] = React.useState("");
	const [pokemonMove, setPokemonMove] = React.useState("");
	const handlePokemonMoveSubmit = (e) => {
		if (e) {
			e.preventDefault();

			//setState((state) => state + 1);
			console.log(pokemonMove);
		}
	};

	// const handleMoveOnChange = (e) => {
	// 	setPokemonMoveEntered(e.target.value);
	// };
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
			<form onSubmit={handlePokemonMoveSubmit}>
				<select
					name={pokemonName1}
					onChange={(event) => setPokemonMove(event.target.value)}
				>
					<option hidden disabled selected value>
						{" "}
						-- select a pokemon move --{" "}
					</option>
					<option value={moveName1}>{moveName1}</option>
					<option value={moveName2}>{moveName2}</option>
				</select>
				<input type="submit" />
			</form>
		</div>
	) : null;
};
export default DisplayPokemon;

// <form action="/action_page.php">
// <select name="cars">
//   <option value="volvo">Volvo XC90</option>
//   <option value="saab">Saab 95</option>
//   <option value="mercedes">Mercedes SLK</option>
//   <option value="audi">Audi TT</option>
// </select>
// <input type="submit" value="Submit">
// </form>
