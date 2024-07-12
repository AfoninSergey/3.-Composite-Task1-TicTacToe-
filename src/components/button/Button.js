import PropTypes from 'prop-types';
import style from './Button.module.css';

export const Button = ({ btn, children, restart, reset }) => (
	<button
		className={`${style.button} ${style[btn]}`}
		onClick={restart || reset}
	>
		{children}
	</button>
);

Button.propTypes = {
	btn: PropTypes.string,
	children: PropTypes.string,
	restart: PropTypes.func,
	reset: PropTypes.func,
};
