import React from "react";

const DisplayFinalBattleResult = ({ fighterMove, finalPokemonMove }) => {
	return finalPokemonMove.length < fighterMove.length ? (
		<span className="final-winner">
			<h1>🎉🎉🎉🎉🎉🎉FINAL WINNER!!!🎉🎉🎉🎉🎉</h1>
		</span>
	) : (
		<span className="final-loser">
			<h2>LOSER Refresh and TRY AGAIN (or try changing your move)</h2>
		</span>
	);
};

export default DisplayFinalBattleResult;
