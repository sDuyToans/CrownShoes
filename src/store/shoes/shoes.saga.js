import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getShoesDocument } from '../../utils/firebase/firebase.utils';
import { fetchShoesCategoriesSuccess, fetchShoesCategoriesFailed } from './shoes.action';
import { SHOES_ACTION_TYPES } from './shoes.type';

export function* fetchShoesCategoriesAsync() {
    try {
        const categoryMap = yield call(getShoesDocument, 'shoes');  
        yield put(fetchShoesCategoriesSuccess(categoryMap));
    } catch (error) {
        yield put(fetchShoesCategoriesFailed(error));
    }
}

export function* onFetchShoesCategories() {
    yield takeLatest(SHOES_ACTION_TYPES.FETCH_SHOES_CATEGORIES_START, fetchShoesCategoriesAsync);
}

export function* shoesCategoriesSaga() {
    yield all([call(onFetchShoesCategories)]);
}