import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./redusers";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer'],
  }

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store  = createStore(persistedReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;

//@ts-ignore
export const persistor = persistStore(store)

export default store