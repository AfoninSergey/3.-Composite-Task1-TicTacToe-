import PropTypes from 'prop-types';
import { Cell } from '../cell/Cell';
import { Text } from '../text/Text';
import style from './Information.module.css';

export const InformationLayout = ({ content, children }) => {
	return (
		<div className={style.information}>
			<Text>{children}</Text>
			<Cell content={content} />
		</div>
	);
};

InformationLayout.propTypes = {
	content: PropTypes.string,
	children: PropTypes.string,
}
