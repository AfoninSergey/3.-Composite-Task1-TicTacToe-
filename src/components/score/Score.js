import PropTypes from 'prop-types';
import { ScoreLayout } from './ScoreLayout';

const getZero = (num) => (num < 10 ? `0${num}` : num);

export const Score = ({ content, left, score }) => (
	<ScoreLayout
		content={content}
		left={left} score={getZero(score)}
	/>
);

Score.propTypes = {
	content: PropTypes.string,
	left: PropTypes.string,
	score: PropTypes.number,
};
