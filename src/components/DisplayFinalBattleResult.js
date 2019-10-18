import React from "react";

const DisplayFinalBattleResult = ({ fighterMove, finalPokemonMove }) => {
	return finalPokemonMove.length < fighterMove.length ? (
		<div className="final-winner">
			<h1>🎉🎉🎉🎉🎉🎉FINAL WINNER!!!🎉🎉🎉🎉🎉</h1>
		</div>
	) : (
		<div className="final-loser">
			<h2>LOSER Refresh and TRY AGAIN</h2>
		</div>
	);
};

export default DisplayFinalBattleResult;
