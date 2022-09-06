import { getShoesDocument } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { SHOES_ACTION_TYPES } from "./shoes.type";

export const fetchShoesCategory = (shoesCategories) => createAction(SHOES_ACTION_TYPES.SET_SHOES_CATEGORIES, shoesCategories);

export const fetchShoesCategoriesStart = () => createAction(SHOES_ACTION_TYPES.FETCH_SHOES_CATEGORIES_START);

export const fetchShoesCategoriesSuccess = (shoesCategories) => createAction(SHOES_ACTION_TYPES.FETCH_SHOES_CATEGORIES_SUCCESS, shoesCategories);

export const fetchShoesCategoriesFailed = (error) => createAction(SHOES_ACTION_TYPES.FETCH_SHOES_CATEGORIES_FAILED, error);

export const fetchShoesCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchShoesCategoriesStart());
    try {
        const categoryMap = await getShoesDocument();  
        dispatch(fetchShoesCategoriesSuccess(categoryMap));
    } catch (error) {
        dispatch(fetchShoesCategoriesFailed(error));
    }
}