import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';

function TopClothes(props) {
	
	const [springTopClothes, api] = useSpring(() => ({
		to: { top: '11%', left: '-5%', x: 0.5 },
		from: { top: '10%', left: '-150%', x: 0.1 },
	}));

	//updating
	api.start({
		to: { top: '11%', left: '-5%', x: 0.5 },
		from: { top: '10%', left: '-150%', x: 0.1 },
	});

	return (
		<animated.div
			className='topclothes'
			style={{
				width: '500px',
				height: '500px',
				background: `url(${props.item.imgSrc_png})`,
				position: 'absolute',
				top: springTopClothes.top,
				left: springTopClothes.left,
				zIndex: 3,
				transform: springTopClothes.x.to(x => `scale(${x})`),
			}}></animated.div>
	);
}

export default memo(TopClothes);
