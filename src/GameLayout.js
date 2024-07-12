import PropTypes from 'prop-types';
import { Information, Button, Field, Score } from './components';
import style from './Game.module.css';

export const GameLayout = ({
	onRestartGame,
	onResetScore,
	oScore,
	xScore,
	...gameStates
}) => (
	<div className={style.game}>
		<div className={style.wrapper}>
			<Information {...gameStates} />
			<Button btn={'restart'} restart={onRestartGame}>
				Начать заново
			</Button>
			<Field {...gameStates} />
			<Button btn={'reset'} reset={onResetScore}>
				Обнулить счёт
			</Button>
		</div>
		<Score content={'circle'} left={'left'} score={oScore} />
		<Score content={'cross'} score={xScore} />
	</div>
);

GameLayout.propTypes = {
	onRestartGame: PropTypes.func,
	onResetScore: PropTypes.func,
	oScore: PropTypes.number,
	xScore: PropTypes.number,
	gameStates: PropTypes.object,
};
