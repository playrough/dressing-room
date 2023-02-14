import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';

function Necklaces(props) {

	const [springNecklaces, api] = useSpring(() => ({
		to: { top: '-10%', left: '-5%', x: 0.5 },
		from: { top: '-0%', left: '-150%', x: 0.1 },
	}));

	//updating
	api.start({
		to: { top: '-10%', left: '-5%', x: 0.5 },
		from: { top: '-0%', left: '-150%', x: 0.1 },
	});

	return (
		<animated.div
			className='necklaces'
			style={{
				width: '500px',
				height: '1000px',
				background: `url(${props.item.imgSrc_png})`,
				position: 'absolute',
				top: springNecklaces.top,
				left: springNecklaces.left,
				zIndex: 4,
				transform: springNecklaces.x.to(x => `scale(${x})`),
			}}></animated.div>
	);
}

export default memo(Necklaces);
