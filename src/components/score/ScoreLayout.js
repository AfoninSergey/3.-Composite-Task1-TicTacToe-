import PropTypes from 'prop-types';
import { Text } from '../text/Text';
import { Cell } from '../cell/Cell';
import style from './Score.module.css';

export const ScoreLayout = ({ left, content, score }) => {
	return (
		<div className={left ? style[left] : ''}>
			<Text size={'small'}>cчёт:</Text>
			<Cell content={content} margin={'margin'} />
			<Cell margin={'margin'}>{score}</Cell>
		</div>
	);
};

ScoreLayout.propTypes = {
	left: PropTypes.string,
	content: PropTypes.string,
	score: PropTypes.string,
};
