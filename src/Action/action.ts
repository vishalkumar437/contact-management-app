import {Contact} from "../interface/interface";
export const removeContact = (id:string) => {
  return {
    type: "REMOVE_CONTACT",
    payload: {
      id,
    },
  };
};

export const addContact = (payload:Contact) => {
  return {
    type: "ADD_CONTACT",
    payload,
  };
};

export const editContact = (payload:Contact) => {
  return {
    type: "EDIT_CONTACT",
    payload,
  };
};
