import DataActionTypes from "./types";
import axios from "axios";

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
      .get("https://mysterious-sierra-11255.herokuapp.com/")
      .then(({ data }) => {
        dispatch(fetchDataSuccess(data));
      });
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};