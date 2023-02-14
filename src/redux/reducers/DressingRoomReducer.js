import data from '../../Data/Data.json';
import { CHOOSE_CLOTHES } from '../types/DressingRoomType';

const initialState = {
	data,
	listChosen: [{
		"id": "background_1",
		"type": "background",
		"name": "Background 1",
		"desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
		"imgSrc_jpg": "../assets/images/background/background1_show.jpg",
		"imgSrc_png": "../assets/images/background/background1.jpg"
	},],
};

const DressingRoomReducer = (state = initialState, action) => {

	switch (action.type) {

		case CHOOSE_CLOTHES: {

			let listChosenUpdate = [...state.listChosen];
			const indexItemChosen = listChosenUpdate.findIndex(item => item.type === action.item.type);
			if (indexItemChosen !== -1) {
				listChosenUpdate[indexItemChosen] = action.item;
			} else {
				listChosenUpdate.push(action.item);
			}
			state.listChosen = listChosenUpdate;
			return { ...state };
		}

		default:
			return { ...state };

	}

};

export default DressingRoomReducer;
