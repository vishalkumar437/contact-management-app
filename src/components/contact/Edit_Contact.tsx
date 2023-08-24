import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editContact } from '../../Action/action';
import { Contact } from '../../interface/interface'; 

function EditContact() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  const AllContact = useSelector((store: { contacts: Contact[] }) => store.contacts);


  const [form, setForm] = useState<Contact>({ // Set the type of "form" as Contact
    id: '',
    fname: '',
    lname: '',
    email: '',
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  function handleSave() {
    const editedContact: Contact = {
        id: form.id, // Assuming your form object has an "id" field
        fname: form.fname,
        lname: form.lname,
        email: form.email,
        status: form.status,
      };
    
      dispatch(editContact(editedContact));
  }

  useEffect(() => {
    AllContact.filter((el:Contact) => el.id === (id) && setForm(el));
  }, [id, AllContact]); // Include id and AllContact in the dependency array

  return (
    <div className="w-1/2 mx-auto my-4 pt-16">
      <h2 className="text-2xl text-white font-bold mb-4">
        <button className="rounded-full shadow shadow-slate-700 bg-teal-600 p-3 text-2xl">
          Edit Contact
        </button>
      </h2>
      <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border text-center border-teal-400 p-2 rounded-full"
                    id="fname"
                    type="text"
                    name="fname"
                    value={form.fname}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border text-center border-teal-400 p-2 rounded-full"
                    id="lname"
                    type="text"
                    name="lname"
                    value={form.lname}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Email
                </label>
                <input
                    className="w-full border text-center border-teal-400 p-2 rounded-sm"
                    id="email"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border text-center border-teal-400 p-2 rounded-full"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}>Active</option>
                    <option value={"inactive"}>Inactive</option>
                </select>
            </div>
            <button
                className="bg-teal-700 hover:bg-teal-600 shadow-md text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
    </div>
  );
}

export default EditContact;
