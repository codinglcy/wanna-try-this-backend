import pkg from 'mongoose';
const { model } = pkg;
import { FoodSchema } from '../schemas/food-schema.js';

const Food = model('food', FoodSchema);

export class FoodModel {
	async createNewFood(foodInfo) {
		const createNewFood = await Food.create(foodInfo);
		return createNewFood;
	}

	async foodFilter(answers) {
		// 답변들로 음식찾기
		const filteredFoods = await Food.find(answers, {
			mood: 0,
			age: 0,
			money: 0,
			ingredient: 0,
			type: 0,
		});

		return filteredFoods;
	}

	async findByNation(nation) {
		const foods = await Food.find(
			{ nation: nation },
			{
				mood: 0,
				age: 0,
				money: 0,
				ingredient: 0,
				type: 0,
			},
		);

		return foods;
	}
}

const foodModel = new FoodModel();

export { foodModel };
