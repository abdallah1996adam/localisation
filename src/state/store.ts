import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistReducer from './persistreducer'


const store: Store<GlobalState, ITranslationKeyAction> & {
  dispatch: DispatchType;
} = createStore(persistReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
export default store;
