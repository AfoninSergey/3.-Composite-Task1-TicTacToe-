import PropTypes from 'prop-types';
import style from './Cell.module.css';

export const Cell = ({ content, margin, children }) => (
	<div
		className={`${style.cell} ${content ? style[content] : ''} ${margin ? style[margin] : ''} ${style.active}`}
	>
		{children}
	</div>
);

Cell.propTypes = {
	content: PropTypes.string,
	margin: PropTypes.string,
	children: PropTypes.string,
};
