import ModalActionTypes from "./modal-types";

const INITIAL_STATE = {
  //default state
  modalOption: "",
  modalOpen: false
};

const modalReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ModalActionTypes.SET_MODAL:
      return {
        ...state,
        modalOption: action.payload,
      };
    case ModalActionTypes.SET_MODAL_STATUS:
      return {
        ...state,
        modalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default modalReducer;
