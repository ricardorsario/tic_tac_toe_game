import React, { useState } from "react";
import Square from "/workspace/react-hello/src/js/component/square.jsx";

const WINNING_LINES = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

const Home = () => {
	const [parameterForSon, setParameterForSon] = useState(true);

	const changeContent = () => {
		setParameterForSon(!parameterForSon);
	};

	const calculateWinner = squares => {
		for (let i = 0; i < WINNING_LINES.length; i++) {
			const [a, b, c] = WINNING_LINES[i];
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return null;
	};

	let manySquares = [];
	for (let i = 0; i < 9; i++) {
		manySquares.push(
			<Square
				key={i.toString()}
				parameterForSonAYUDA={parameterForSon}
				changeContent={changeContent}
			/>
		);
	}

	return (
		<div className="master-div">
			<div className="many-square-class">
				<div className="row">{manySquares[0]}</div>
				<div className="row">{manySquares[1]}</div>
				<div className="row">{manySquares[2]}</div>
			</div>
			<div className="many-square-class">
				<div className="row">{manySquares[3]}</div>
				<div className="row">{manySquares[4]}</div>
				<div className="row">{manySquares[5]}</div>
			</div>
			<div className="many-square-class">
				<div className="row">{manySquares[6]}</div>
				<div className="row">{manySquares[7]}</div>
				<div className="row">{manySquares[8]}</div>
			</div>
		</div>
	);
};

export default Home;
