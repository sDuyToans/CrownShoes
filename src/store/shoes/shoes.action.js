import { createAction } from "../../utils/reducer/reducer.utils";
import { SHOES_ACTION_TYPES } from "./shoes.type";
export const fetchShoesCategory = (shoesCategories) => createAction(SHOES_ACTION_TYPES.SET_SHOES_CATEGORIES, shoesCategories)