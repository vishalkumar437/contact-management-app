
interface Contact {
  id: number;
  fname: string;
  lname: string;
  email: string;
  status: string;
}

interface ActionType {
  type: string;
  payload: any;
}

interface State {
  contacts: Contact[];
}

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
      let flag = 0;
      if (
        action.payload.fname === "" ||
        action.payload.lname === "" ||
        action.payload.email === ""
      ) {
        alert("You missed one or more fields");
        flag = 1;
      } else {
        state.contacts.forEach((person: Contact) => {
          if (person.email === action.payload.email) {
            alert("Email Already Exists In Contacts");
            flag = 1;
          }
        });
      }
    
      if (!flag) {
        alert("Contact Saved Successfully!");
        let updatedContacts = storedContactsJSON
          ? JSON.parse(storedContactsJSON)
          : [];
        updatedContacts.push({
          id: state.contacts.length + 1,
          ...action.payload,
        });
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
        return {
          ...state,
          contacts: [...updatedContacts],
        };
      }
    
      return state; //to return the state if the flag condition is met
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
