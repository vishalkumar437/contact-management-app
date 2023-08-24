import Contacts from "../components/contact/Contacts";
import {Contact,ActionType,State} from "../interface/interface";

const storedContactsJSON = localStorage.getItem("contacts");
const initialContacts: Contact[] = storedContactsJSON
  ? JSON.parse(storedContactsJSON)
  : [];

const initialState: State = {
  contacts: initialContacts,
};

export default function reducer(
  state: State = initialState,
  action: ActionType
) {
  switch (action.type) {

    case "REMOVE_CONTACT": {
      let Contacts = storedContactsJSON ? JSON.parse(storedContactsJSON) : [];
      let updatedContacts = Contacts.filter(
        (person: Contact) => person.id !== action.payload.id
      );
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return {
        ...state,

        contacts: [...updatedContacts],
      };
    }

    case "ADD_CONTACT": { 
      console.log(initialContacts.length)
      let flag=0
       if(action.payload.first_name===""||action.payload.last_name===""||action.payload.mob===""){
          alert('ohh You Missed Required Input , Please fill')
        flag=1
      }
      else{
     state.contacts.forEach((el)=>{
        if(el.fname===action.payload.first_name&&el.lname===action.payload.last_name){
            alert('Name Already Exist In Contact')
            flag=1
            return;
        }
      
      })
      }
 
      let updatedContacts= storedContactsJSON ? JSON.parse(storedContactsJSON) : [];
      if(!flag){
        alert('Contact Saved Successfully!!!')
        updatedContacts.push({id:initialContacts.length+1,...action.payload})
        localStorage.setItem('contacts',JSON.stringify(updatedContacts))
      };
      return {
        ...state,
        contacts: [
        ...updatedContacts],
      
    }

      
      }
    


    case "EDIT_CONTACT": {
      if (
        action.payload.first_name === "" ||
        action.payload.last_name === "" ||
        action.payload.mob === ""
      ) {
        alert("Input Fields Can Not Be Leave Empty");
        // flag=1
        return state;
      } else {
        let flag = 0;
        let Contacts = storedContactsJSON ? JSON.parse(storedContactsJSON) : [];

        Contacts.forEach((person: Contact) => {
          if (
            person.id !== action.payload.id &&
            person.email === action.payload.email
          ) {
            alert("Email Already Exist!!");
            flag = 1;
            return state;
          }
        });

        if (flag) {
          return state;
        } else {
          let updatedContacts = Contacts.map((person: Contact) => {
            if (person.id === action.payload.id) {
              return (person = { ...action.payload });
            } else {
              return person;
            }
          });
          localStorage.setItem("contacts", JSON.stringify(updatedContacts));
          alert("Contact has been Updated");
          return {
            ...state,
            contacts: state.contacts.map((person) => {
              if (person.id === action.payload.id) {
                // console.log(action.payload)
                //  return  el={...action.payload}

                return (person = { ...action.payload });
              } else {
                return person;
              }
            }),
          };
        }
      }
    }

    default:
      return state;
  }
}
