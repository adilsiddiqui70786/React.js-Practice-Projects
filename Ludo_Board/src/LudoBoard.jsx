import { useState } from "react";

export default function LudoBoard() {
	let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

	let updateBlueColor = () => {
		setMoves((prevMoves) => {
			return { ...prevMoves, blue: prevMoves.blue + 1 };
		});
	};

	let updateYellowColor = () => {
		setMoves((prevMoves) => {
			return { ...prevMoves, yellow: prevMoves.yellow + 1 };
		});
	};

	let updateGreenColor = () => {
		setMoves((prevMoves) => {
			return { ...prevMoves, green: prevMoves.green + 1 };
		});
	};
	let updateRedColor = () => {
		setMoves((prevMoves) => {
			return { ...prevMoves, red: prevMoves.red + 1 };
		});
	};

	return (
		<div>
			<h2>Game Begins!</h2>
			<div className="board">
				<p>Blue Moves = {moves.blue}</p>
				<button onClick={updateBlueColor} style={{ backgroundColor: "blue" }}>
					+1
				</button>
				<p>Yellow Moves = {moves.yellow} </p>
				<button
					onClick={updateYellowColor}
					style={{ backgroundColor: "yellow", color: "black" }}>
					+1
				</button>
				<p>Green Moves = {moves.green}</p>
				<button onClick={updateGreenColor} style={{ backgroundColor: "green" }}>
					+1
				</button>
				<p>Red Moves = {moves.red} </p>
				<button onClick={updateRedColor} style={{ backgroundColor: "red" }}>
					+1
				</button>
			</div>
		</div>
	);
}
