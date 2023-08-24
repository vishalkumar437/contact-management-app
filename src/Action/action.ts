import {Contact} from "../interface/interface";
const ADD = "ADD_CONTACT";
const EDIT = "EDIT_CONTACT";
const REMOVE = "REMOVE_CONTACT";
export const removeContact = (id:number) => {
  return {
    type: REMOVE,
    payload: {
      id,
    },
  };
};

export const addContact = (payload:Contact) => {
  return {
    type: ADD,
    payload,
  };
};

export const editContact = (payload:Contact) => {
  return {
    type: EDIT,
    payload,
  };
};
