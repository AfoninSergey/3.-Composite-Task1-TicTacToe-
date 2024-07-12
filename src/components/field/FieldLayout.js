import PropTypes from 'prop-types';
import style from './Field.module.css';

export const FieldLayout = ({ btns, onMakeMove, isEnded }) => {

	return (
		<div className={`${style.field} ${isEnded ? style.ended : ''}`}>
			{btns.map((btn, i) => {
				let btnClassName = style.cell;
				if (btn === 'Х') {
					btnClassName = `${style.cell}  ${style.cross}`;
				} else if (btn === 'О') {
					btnClassName = `${style.cell}  ${style.circle}`;
				}
				return (
					<button
						key={i}
						className={btnClassName}
						onClick={({ target }) => {
							onMakeMove(btn, i);
							//_________________________!
							setTimeout(() => {
								target.classList.add(style.active);
							}, 0);
							//По другому я никак не смог добиться плавности появления крестиков и ноликов
						}}
					/>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	btns: PropTypes.array,
	onMakeMove: PropTypes.func,
	isEnded: PropTypes.bool,
};
