import React from "react";
const fightersDB = require("../fighters");

const DisplayFighters = ({ fighter, fighterName, setFighter, state }) => {
	// const [fighterMoveEntered, setFighterMoveEntered] = React.useState("");

	const [fighterMove, setFighterMove] = React.useState("");
	const handleFighterMoveSubmit = (e) => {
		if (e) {
			e.preventDefault();

			console.log(fighterMove);
		}
	};

	// const handleMoveOnChange = (e) => {
	// 	setFighterMoveEntered(e.target.value);
	// };

	React.useEffect(() => {
		const newFighter = fightersDB.filter(
			(fighter) => fighter.name === fighterName
		)[0];

		setFighter({
			fighterName: newFighter.name,
			fighterMove1: newFighter.move1,
			fighterMove2: newFighter.move2
		});
	}, [fighterName, setFighter, state]);
	const { fighterMove1, fighterMove2 } = fighter;

	return fighter ? (
		<div>
			Fighter Move
			<form onSubmit={handleFighterMoveSubmit}>
				<select
					name={fighterName}
					onChange={(event) => setFighterMove(event.target.value)}
				>
					<option hidden disabled selected value>
						{" "}
						-- select a FAC fighter move --{" "}
					</option>
					<option value={fighterMove1}>{fighterMove1} </option>
					<option value={fighterMove2}>{fighterMove2}</option>
				</select>
				<button type="submit"> submit </button>
			</form>
		</div>
	) : null;
};
export default DisplayFighters;
