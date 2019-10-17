import React from "react";

import "./App.css";
import { getPokemonAPI } from "./utilFunctions/getPokemonAPI";
import DisplayInputs from "./components/DisplayInputs";
import DisplayPokemon from "./components/DisplayPokemon";
import DisplayFighters from "./components/DisplayFighters";
import DisplayBattle from "./components/DisplayBattle";

function App() {
	const [pokemon, setPokemon] = React.useState({});
	const [fighter, setFighter] = React.useState({});
	const [pokemonName, setPokemonName] = React.useState("");
	const [fighterName, setFighterName] = React.useState("");
	const [pokemonMove, setPokemonMove] = React.useState("");
	const [fighterMove, setFighterMove] = React.useState("");

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
						pokemonMove={pokemonMove}
						setPokemonMove={pokemonMove}
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
						fighterMove={fighterMove}
						setFighterMove={fighterMove}
					/>
				) : (
					""
				)}
				{/* <DisplayBattle
					fighterMove1={fighterMove1}
					fighterName={fighterName}
					fighterMove2={fighterMove2}
					pokemonName1={pokemonName}
					moveName1={moveName1}
					moveName2={moveName2}
				/> */}
			</div>
		</main>
	);
}

export default App;
