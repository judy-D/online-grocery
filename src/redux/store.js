import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from './rootReducer'

function configureStore(initialState) {

const store = createStore(persistReducer({
    key: "root",
    debug: true,
    storage,
  }, rootReducer));

console.log("initialState", store.getState());

const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    // console.log("restoredState", store.getState());
  });

  return { store, persistor };


}
export default configureStore;