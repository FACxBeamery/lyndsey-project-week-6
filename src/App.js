import React from "react";

import "./App.css";
import { getPokemonAPI } from "./utilFunctions/getPokemonAPI";
import DisplayInputs from "./components/DisplayInputs";
import Test from "./components/DisplayPokemon";
import DisplayPokemon from "./components/DisplayPokemon";

function App() {
	const [pokemon, setPokemon] = React.useState(undefined);
	const [state, setState] = React.useState(0);
	return (
		<main>
			<div className="App">
				<h1> PokeFighter</h1>
				<DisplayInputs
					setState={setState}
					setPokemon={setPokemon}
					pokemon={pokemon}
				/>
				{pokemon ? <DisplayPokemon pokemon={pokemon} /> : ""}
			</div>
		</main>
	);
}

export default App;
