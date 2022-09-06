import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["userReducer"],
};
// const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    thunk
].filter(Boolean);
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
// sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
