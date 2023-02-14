import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';

function Hairstyle(props) {
	
	const [springHairstyle, api] = useSpring(() => ({
		to: { top: '-55%', left: '-60.5%', x: 0.16 },
		from: { top: '-20%', left: '-200%', x: 0.1 },
	}));

	//updating
	api.start({
		to: { top: '-55%', left: '-60.5%', x: 0.16 },
		from: { top: '-20%', left: '-200%', x: 0.1 },
	});

	return (
		<animated.div
			className='hairstyle'
			style={{
				width: '1000px',
				height: '1000px',
				background: `url(${props.item.imgSrc_png})`,
				position: 'absolute',
				top: springHairstyle.top,
				left: springHairstyle.left,
				zIndex: 5,
				transform: springHairstyle.x.to(x => `scale(${x})`),
			}}></animated.div>
	);
}

export default memo(Hairstyle);
