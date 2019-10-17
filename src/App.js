import React from "react";

import "./App.css";
import { getPokemonAPI } from "./utilFunctions/getPokemonAPI";
import DisplayInputs from "./components/DisplayInputs";
import DisplayPokemon from "./components/DisplayPokemon";
import DisplayFighters from "./components/DisplayFighters";

function App() {
	const [pokemon, setPokemon] = React.useState({});
	const [fighter, setFighter] = React.useState({});
	const [pokemonName, setPokemonName] = React.useState("");
	const [fighterName, setFighterName] = React.useState("");

	const [state, setState] = React.useState(0);
	return (
		<main>
			<div className="App">
				<h1> PokeFighter</h1>
				<DisplayInputs
					setState={setState}
					setPokemonName={setPokemonName}
					setFighterName={setFighterName}
					pokemonName={pokemonName}
					fighterName={fighterName}
				/>
				{pokemonName ? (
					<DisplayPokemon
						state={state}
						pokemon={pokemon}
						pokemonName={pokemonName}
						setPokemon={setPokemon}
					/>
				) : (
					""
				)}
				{fighterName ? (
					<DisplayFighters
						state={state}
						fighter={fighter}
						fighterName={fighterName}
						setFighter={setFighter}
					/>
				) : (
					""
				)}
			</div>
		</main>
	);
}

export default App;
