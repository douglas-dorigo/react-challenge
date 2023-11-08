import { createStore, combineReducers } from 'redux';
import nameReducer from './reducers';

const rootReducer = combineReducers({
  names: nameReducer,
});

const store = createStore(rootReducer);

export default store;