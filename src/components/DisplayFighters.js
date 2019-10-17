import React from "react";
const fightersDB = require("../fighters");

// const findFighterName = (fighterName1) => {
// 	let fighterName;
// 	let fighterMove1;
// 	let fighterMove2;
// 	const newFighter = fighters.filter(
// 		(fighter) => fighter.name === fighterName1
// 	)[0];
// 	return newFighter;
// fighterName = newFighter.name;
// fighterMove1 = newFighter.move1;
// fighterMove2 = newFighter.move2;

const DisplayFighters = ({ fighter, fighterName, setFighter, state }) => {
	// const [fighterData, setFighterData] = React.useState({});
	React.useEffect(() => {
		console.log(fightersDB[0]);
		let fighterMove1;
		let fighterMove2;
		const newFighter = fightersDB.filter(
			(fighter) => fighter.name === fighterName
		)[0];
		console.log(newFighter);
		setFighter({
			fighterName: newFighter.name,
			fighterMove1: newFighter.move1,
			fighterMove2: newFighter.move2
		});
	}, [fighterName, setFighter, state]);
	const { fighterMove1, fighterMove2 } = fighter;

	return fighter ? (
		<div>
			<p>{fighterName}</p>
			<p>{fighterMove1}</p>
			<p>{fighterMove2}</p>
		</div>
	) : null;
};
export default DisplayFighters;
