import { CHOOSE_CLOTHES } from '../types/DressingRoomType';

export const chooseClothes = item => ({
	type: CHOOSE_CLOTHES,
	item,
});
