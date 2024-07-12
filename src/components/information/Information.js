import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { InformationLayout } from './InformationLayout';

export const Information = ({
	currentPlayer,
	isDraw,
	isGameEnded,
	setXScore,
	setOScore,
}) => {
	const drawText = 'Н И Ч Ь Я ! ! !';
	const playText = 'Сейчас ходит:';
	const winerText = 'П О Б Е Д И Л:';
	const [infoText, setInfoText] = useState(playText);
	const [cellContent, setCellContent] = useState('cross');

	// пока использую этот хук наугад. Без него тоже работает, но в консоле вылезает ошибка
	useEffect(() => {
		if (
			isDraw &&
			!isGameEnded &&
			infoText !== drawText &&
			cellContent !== 'draw'
		) {
			setInfoText(drawText);
			setCellContent('draw');
		} else if (
			(isDraw && isGameEnded && infoText !== winerText) ||
			(!isDraw && isGameEnded && infoText !== winerText)
		) {
			setInfoText(winerText);

			if (currentPlayer === 'Х' && cellContent !== 'cross') {
				setCellContent('cross');
				setXScore((score) => score + 1);
			} else if (currentPlayer === 'О' && cellContent !== 'circle') {
				setCellContent('circle');
				setOScore((score) => score + 1);
			}
		}
		if (!isGameEnded && !isDraw) {
			if (infoText !== playText) setInfoText(playText);
			if (currentPlayer === 'О' && cellContent !== 'circle') {
				setCellContent('circle');
			} else if (currentPlayer === 'Х' && !isDraw && cellContent !== 'cross') {
				setCellContent('cross');
			}
		}
	}, [
		isDraw,
		isGameEnded,
		infoText,
		currentPlayer,
		cellContent,
		setXScore,
		setOScore,
	]);

	return <InformationLayout content={cellContent}>{infoText}</InformationLayout>;
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	setXScore: PropTypes.func,
	setOScore: PropTypes.func,
};
