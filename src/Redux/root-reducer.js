//Represents overall reducer (combination of all reducers)
import { combineReducers } from 'redux';
import dataReducer from './reducer';
//import storage from 'redux-persist/lib/storage';//Use local storage as default storage

const rootReducer = combineReducers({
   data: dataReducer,
});

export default rootReducer;

