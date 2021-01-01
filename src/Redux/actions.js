import DataActionTypes from "./types";
import axios from "axios";
const apiUrl = process.env.REACT_APP_API;

export const fetchDataStart = () => ({
  type: DataActionTypes.FETCH_DATA_PENDING, //Switches reducers isFetching state
});

export const fetchDataSuccess = (data) => ({
  type: DataActionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (errorMessage) => ({
  type: DataActionTypes.FETCH_DATA_FAILURE,
  payload: errorMessage,
});

export const fetchData = () => (dispatch) => {
  dispatch(fetchDataStart());
  try {
    axios
      .get(apiUrl)
      .then(({ data }) => {
        dispatch(fetchDataSuccess(data));
      });
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};
