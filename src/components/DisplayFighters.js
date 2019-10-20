import React from "react";
import styles from "./DisplayFightersPokemon.module.css";
const fightersDB = require("../fighters");

const DisplayFighters = ({
	fighter,
	fighterName,
	setFighter,
	state,
	setFighterMove
}) => {
	// const handleFighterMoveSubmit = (e) => {
	// 	if (e) {
	// 		e.preventDefault();

	// 		console.log(fighterMove);
	// 	}
	// };

	React.useEffect(() => {
		const newFighter = fightersDB.filter(
			(fighter) => fighter.name === fighterName
		)[0];
		if (newFighter) {
			setFighter({
				fighterName: newFighter.name,
				fighterMove1: newFighter.move1,
				fighterMove2: newFighter.move2
			});
		}
	}, [fighterName, setFighter, state]);

	const { fighterMove1, fighterMove2 } = fighter;

	return fighterMove1 && fighterMove2 ? (
		<div>
			Fighter Move
			<form>
				<select
					name={fighterName}
					onChange={(event) => {
						event.preventDefault();
						setFighterMove(event.target.value);
					}}
					className={styles["fighter-move--form-select"]}
				>
					<option hidden disabled selected value>
						{" "}
						-- select a FAC fighter move --{" "}
					</option>
					<option value={fighterMove1}>{fighterMove1} </option>
					<option value={fighterMove2}>{fighterMove2}</option>
				</select>
			</form>
		</div>
	) : (
		<h3>Oops! Looks like that fighter doesn't exist, try another name.</h3>
	);
};
export default DisplayFighters;
