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
        const clothes = {
            'topclothes': TopClothes,
            'botclothes': BotClothes,
            'shoes': Shoes,
            'handbags': Handbags,
            'necklaces': Necklaces,
            'hairstyle': Hairstyle,
            'default': Background
        };

        return listChosen.map((item, index) => {
            const Component = clothes[item.type] || clothes['default'];
            return <Component item={item} key={index} />;
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
