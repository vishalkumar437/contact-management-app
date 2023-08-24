
const ADD = "ADD_CONTACT";
const EDIT = "ADD_CONTACT";
const REMOVE = "ADD_CONTACT";

interface Contact {
    id:number;
    fname: string;
    lname: string;
    email: string;
    status: string;
  }
  
export const addContact = (payload:Contact) => {
  return {
    type: ADD,
    payload,
  };
};

export const removeContact = (id:number) => {
  return {
    type: REMOVE,
    payload: {
      id,
    },
  };
};
export const editContact = (payload:Contact) => {
  return {
    type: EDIT,
    payload,
  };
};
