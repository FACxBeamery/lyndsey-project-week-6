import React from "react";

import "./App.css";
import { getPokemonAPI } from "./utilFunctions/getPokemonAPI";
import DisplayInputs from "./components/DisplayInputs";
import Test from "./components/Test";

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
				{pokemon ? <Test pokemon={pokemon} /> : ""}
			</div>
		</main>
	);
}

export default App;
