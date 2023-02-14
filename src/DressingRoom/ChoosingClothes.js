import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseClothes } from '../redux/actions/DressingRoomAction';

export default function ChoosingClothes() {

	const { navPills } = useSelector(state => state.DressingRoomReducer.data);
	const { tabPanes } = useSelector(state => state.DressingRoomReducer.data);
	const dispatch = useDispatch();


	const renderNavPill = () => {
		return navPills.map((item, index) => {
			return (
				<li className='nav-item' key={index}>
					<a className={index === 0 ? 'nav-link btn-default active' : 'nav-link btn-default'} data-toggle='pill' href={`#${item.tabName}`}>
						{item.showName}
					</a>
				</li>
			);
		});
	};


	const renderTabPanes = () => {
		return navPills.map((item, index) => {
			return (
				<div className={index === 0 ? 'tab-pane container active' : 'tab-pane container'} key={index} id={item.tabName}>
					<div className='container'>
						<div className='row'>
							{renderContentTabPanes(item.type)}
						</div>
					</div>
				</div>
			);
		});
	};


	const renderContentTabPanes = typeNavPill => {
		const contentTabPanes = [];

		tabPanes.forEach((item, index) => {
			if (item.type === typeNavPill) {
				const itemTabPanes = (
					<div className='col-md-3' key={index}>
						<div className='card text-center'>
							<img src={item.imgSrc_jpg} alt={item.imgSrc_jpg} />
							<h4>
								<b>{item.name}</b>
							</h4>
							<button
								onClick={() => {
									dispatch(chooseClothes(item));
								}}>
								Thử đồ
							</button>
						</div>
					</div>
				);
				contentTabPanes.push(itemTabPanes);
			}
		});

		return contentTabPanes;
	};


	return (
		<div className='choosingClothes'>

			<ul className='nav nav-pills'>
				{renderNavPill()}
			</ul>

			<div className='well'>
				<div className='tab-content'>
					{renderTabPanes()}
				</div>
			</div>

		</div>
	);
}
