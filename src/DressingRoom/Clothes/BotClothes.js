import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';

function BotClothes(props) {
	
	const [springBotClothes, api] = useSpring(() => ({
		to: { top: '-10%', left: '-5%', x: 0.5 },
		from: { top: '-30%', left: '-150%', x: 0.1 },
	}));

	//updating
	api.start({
		to: { top: '-10%', left: '-5%', x: 0.5 },
		from: { top: '-30%', left: '-150%', x: 0.1 },
	});

	return (
		<animated.div
			className='botclothes'
			style={{
				width: '500px',
				height: '1000px',
				background: `url(${props.item.imgSrc_png})`,
				position: 'absolute',
				top: springBotClothes.top,
				left: springBotClothes.left,
				zIndex: 2,
				transform: springBotClothes.x.to(x => `scale(${x})`),
			}}></animated.div>
	);
}

export default memo(BotClothes);
