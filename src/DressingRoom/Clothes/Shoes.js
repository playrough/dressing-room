import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';

function Shoes(props) {

	const [springShoes, api] = useSpring(() => ({
		to: { top: '-10%', left: '-5%', x: 0.5 },
		from: { top: '-50%', left: '-150%', x: 0.1 },
	}));

	// updating
	api.start({
		to: { top: '-10%', left: '-5%', x: 0.5 },
		from: { top: '-50%', left: '-150%', x: 0.1 },
	});

	return (
		<animated.div
			className='shoes'
			style={{
				width: '500px',
				height: '1000px',
				background: `url(${props.item.imgSrc_png})`,
				position: 'absolute',
				top: springShoes.top,
				left: springShoes.left,
				zIndex: 1,
				transform: springShoes.x.to(x => `scale(${x})`),
			}}></animated.div>
	);
}

export default memo(Shoes);
