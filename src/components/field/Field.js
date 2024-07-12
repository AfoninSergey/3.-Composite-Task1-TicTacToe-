import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FieldLayout } from './FieldLayout';

export const Field = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	isGameEnded,
	setIsGameEnded,
	setIsDraw,
	WIN_PATTERNS,
}) => {
	const makeMove = (clickedBtn, clickedIndex) => {
		if (clickedBtn === '' && !isGameEnded) {
			setCurrentPlayer((currentPlayer) => (currentPlayer === 'Х' ? 'О' : 'Х'));
			setField((field) =>
				field.map((btn, i) =>
					i === clickedIndex ? (btn = currentPlayer) : btn,
				),
			);
		}
	};

	useEffect(() => {
		// пока использую этот хук наугад. Без него тоже работает, но в консоле вылезает ошибка
		if (WIN_PATTERNS.some((arr) => arr.every((i) => field[i] === 'Х'))) {
			setIsGameEnded(true);
			setCurrentPlayer('Х');
		}

		if (WIN_PATTERNS.some((arr) => arr.every((i) => field[i] === 'О'))) {
			setIsGameEnded(true);
			setCurrentPlayer('О');
		}

		if (!field.includes('') && !isGameEnded) setIsDraw(true);
	});

	return <FieldLayout isEnded={isGameEnded} btns={field} onMakeMove={makeMove} />;
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	WIN_PATTERNS: PropTypes.array,
};
