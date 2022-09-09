import { all, call } from 'redux-saga/effects';
import { shoesCategoriesSaga } from './shoes/shoes.saga';
import { userSaga } from './user/user.saga';

export function* rootSaga() {
    yield all([call(shoesCategoriesSaga), call(userSaga)])
}