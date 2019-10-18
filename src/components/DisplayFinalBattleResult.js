import React from "react";

const DisplayFinalBattleResult = ({
	fighterMove,
	finalPokemonMove,
	finalPokemonName,
	setFinalPokemonName
}) => {
	return finalPokemonMove.length > fighterMove.length ? (
		<div>
			<h1>WINNER!!!</h1>
		</div>
	) : (
		<div>
			<h2>LOSER</h2>
		</div>
	);
};

export default DisplayFinalBattleResult;
