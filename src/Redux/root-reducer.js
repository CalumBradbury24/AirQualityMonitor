//Represents overall reducer (combination of all reducers)
import { combineReducers } from 'redux';
import dataReducer from './reducer';
import modalReducer from './modal/modal-reducer';

const rootReducer = combineReducers({
   data: dataReducer,
   modal: modalReducer
});

export default rootReducer;

