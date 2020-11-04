import ModalActionTypes from './modal-types';

export const setModal = (string) => ({
    type: ModalActionTypes.SET_MODAL, payload: string 
});

export const setModalStatus = (string) => ({
    type: ModalActionTypes.SET_MODAL_STATUS, payload: string
});



