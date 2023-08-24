 interface Contact {
    id:string;
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

  export type { Contact, ActionType, State };
