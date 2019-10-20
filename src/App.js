import React from "react";

import styles from "./App.module.css";
import { getPokemonAPI } from "./utilFunctions/getPokemonAPI";
import DisplayInputs from "./components/DisplayInputs";
import DisplayPokemon from "./components/DisplayPokemon";
import DisplayFighters from "./components/DisplayFighters";
import DisplayBattle from "./components/DisplayBattle";
import DisplayFinalBattle from "./components/DisplayFinalBattle";
import DisplayFinalBattleResult from "./components/DisplayFinalBattleResult";

function App() {
	const [pokemon, setPokemon] = React.useState({});
	const [fighter, setFighter] = React.useState({});
	const [pokemonName, setPokemonName] = React.useState("");
	const [fighterName, setFighterName] = React.useState("");
	const [pokemonMove, setPokemonMove] = React.useState("");
	const [fighterMove, setFighterMove] = React.useState("");
	const [finalPokemonName, setFinalPokemonName] = React.useState("");
	const [finalPokemon, setFinalPokemon] = React.useState("");
	const [finalPokemonMove, setFinalPokemonMove] = React.useState("");
	const [state, setState] = React.useState(0);

	return (
		// <main>
		<div className={styles["root"]}>
			<h1> PokeFighter</h1>
			<img src="https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png"></img>
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
					setPokemonMove={setPokemonMove}
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
					setFighterMove={setFighterMove}
				/>
			) : (
				""
			)}
			{pokemonMove && fighterMove ? (
				<DisplayBattle
					fighterMove={fighterMove}
					pokemonMove={pokemonMove}
					pokemonName={pokemonName}
					setFinalPokemonName={setFinalPokemonName}
					setState={setState}
				/>
			) : (
				""
			)}
			{pokemonName ? (
				<DisplayFinalBattle
					state={state}
					finalPokemon={finalPokemon}
					finalPokemonName={finalPokemonName}
					setFinalPokemon={setFinalPokemon}
					setFinalPokemonMove={setFinalPokemonMove}
				/>
			) : (
				""
			)}
			{finalPokemonMove ? (
				<DisplayFinalBattleResult
					fighterMove={fighterMove}
					finalPokemonMove={finalPokemonMove}
				/>
			) : (
				""
			)}
		</div>
		// </main>
	);
}

export default App;
