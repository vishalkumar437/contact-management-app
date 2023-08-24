import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Action/action';
import { useMutation, useQueryClient } from 'react-query';
import { Contact } from '../../interface/interface';


function ContactForm() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [form, setForm] = useState<Contact>({
    id:0,
    fname: '',
    lname: '',
    email: '',
    status: 'active'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    console.log(e.target.name)
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value
    }));
  };

  const addContactMutationFn = async (newContact: Contact) => {
    // Call your addContact action or API request here
    dispatch(addContact(newContact));
  };

  const addContactMutation = useMutation(addContactMutationFn, {
    onSuccess: () => {
      // Invalidate and refetch data after successful mutation
      queryClient.invalidateQueries('contacts');
    }
  });

  const handleSave = () => {
    addContactMutation.mutate(form);
  };

  return (
    <div className=" mx-auto my-4 pt-9">
      <h2 className="text-2xl text-white font-bold mb-4">
        <button className="shadow shadow-slate-700 font-bold bg-blue-600 p-3 rounded-sm">
          Create Contact
        </button>
      </h2>
      <div className="mb-4">
                <label className=" font-bold mb-2" htmlFor="first-name">
                    First Name:
                </label>
                <input
                    className="w-full border text-center border-blue-400 p-2"
                    id="fname"
                    type="text"
                    name="fname"
                    value={form.fname}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Last Name:
                </label>
                <input
                    className="w-full border text-center border-blue-400 p-2 rounded-sm"
                    id="lname"
                    type="text"
                    name="lname"
                    value={form.lname}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Email:
                </label>
                <input
                    className="w-full border text-center border-blue-400 p-2 rounded-sm"
                    id="email"
                    type="text"
                    name="email"
                    min='10'
                    max='10'
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border text-center text-bold border-blue-400 p-2 rounded-sm"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value={'active'}><strong>Active</strong></option>
                    <option value={"inactive"}><strong>Inactive</strong></option>
                </select>
            </div>
      <button
        className="bg-blue-700 hover:bg-blue-600 shadow-md text-white font-bold py-2 px-4 rounded"
        onClick={handleSave}
        disabled={addContactMutation.isLoading}
      >
        {addContactMutation.isLoading ? 'Saving...' : 'Save Contact'}
      </button>
    </div>
  );
}

export default ContactForm;
