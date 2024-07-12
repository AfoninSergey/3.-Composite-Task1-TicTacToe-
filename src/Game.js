import { useState } from 'react';
import { GameLayout } from './GameLayout';
const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const Game = () => {
	const [oScore, setOScore] = useState(0);
	const [xScore, setXScore] = useState(0);
	const [currentPlayer, setCurrentPlayer] = useState('Х');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const state = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		oScore,
		setOScore,
		xScore,
		setXScore,
		WIN_PATTERNS,
	};

	const restartGame = () => {
		setCurrentPlayer('Х');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	const resetScore = () => {
		setOScore(0);
		setXScore(0);
	};

	return <GameLayout {...state} onRestartGame={restartGame} onResetScore={resetScore}/>;
};
