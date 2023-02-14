import React, { memo } from 'react';
import { useSpring, animated } from 'react-spring';

function Background(props) {

	const [springBackground, api] = useSpring(() => ({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: 1000 },
	}));

	//updating
	api.start({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: { duration: 1000 },
	});

	return (
		<animated.div
			className='background'
			style={{
				backgroundImage: `url(${props.item.imgSrc_png})`,
				opacity: springBackground.opacity,
				zIndex: -1,
			}}></animated.div>
	);
}

export default memo(Background);
