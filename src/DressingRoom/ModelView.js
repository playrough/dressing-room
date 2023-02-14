import React from 'react';
import { useSelector } from 'react-redux';

import TopClothes from './Clothes/TopClothes';
import BotClothes from './Clothes/BotClothes';
import Shoes from './Clothes/Shoes';
import Handbags from './Clothes/Handbags';
import Necklaces from './Clothes/Necklaces';
import Hairstyle from './Clothes/Hairstyle';
import Background from './Clothes/Background';

export default function ModelView() {
	const listChosen = useSelector(state => state.DressingRoomReducer.listChosen);

	const renderClothes = () => {
		return listChosen.map((item, index) => {
			switch (item.type) {

				case 'topclothes': {
					return <TopClothes item={item} key={index} />;
				}

				case 'botclothes': {
					return <BotClothes item={item} key={index} />;
				}

				case 'shoes': {
					return <Shoes item={item} key={index} />;
				}

				case 'handbags': {
					return <Handbags item={item} key={index} />;
				}

				case 'necklaces': {
					return <Necklaces item={item} key={index} />;
				}

				case 'hairstyle': {
					return <Hairstyle item={item} key={index} />;
				}

				default: {
					return <Background item={item} key={index} />;
				}

			}
		});
	};

	return (
		<div className='contain'>
			<div className='model'></div>
			<div className='body'></div>
			<div className='feet-left'></div>
			<div className='feet-right'></div>
			<div className='bikinitop'></div>
			<div className='bikinibottom'></div>
			<div className='renderClothes'>
				{renderClothes()}
			</div>
		</div>
	);
}
