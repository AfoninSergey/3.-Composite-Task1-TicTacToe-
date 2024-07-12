import PropTypes from 'prop-types';
import style from './Text.module.css';

export const Text = ({ size, children }) => (
	<div className={`${style.text} ${size ? style[size] : ''}`}>{children}
	</div>
);

Text.propTypes = {
	size: PropTypes.string,
	children: PropTypes.string,
};
