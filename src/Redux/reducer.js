import DataActionTypes from './types';


const INITIAL_STATE = { //default state
    readings: [],
    isFetching: true,
    errorMessage: ''
  };

  
const dataReducer = (state = INITIAL_STATE, action={}) => {
    switch (action.type) {
      case DataActionTypes.FETCH_DATA_PENDING: 
        return{
          ...state,
          isFetching: true
        }
  
      case DataActionTypes.FETCH_DATA_SUCCESS:
        return{
          ...state,
          isFetching: false,
          readings: action.payload
        }
        case DataActionTypes.FETCH_DATA_FAILURE:
          return{
            ...state,
            isFetching: false,
            errorMessage: action.payload
          }
      default:
        return state;
    }
  };
  
  export default dataReducer;

