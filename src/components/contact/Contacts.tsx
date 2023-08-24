import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeContact } from "../../Action/action"
import {Contact,State} from "../../interface/interface";
import profile from "../../assets/profile.png";
export default function Contacts() {
  const AllContacts = useSelector((store:State) => store.contacts)
  const dispatch = useDispatch()
  useEffect(() => {

  }, [dispatch, AllContacts.length])
  return (
    <div className='justify-center w-full'>
        <div className="m-4">
                <button className="font-bold shadow-slate-800 bg-blue-500 shadow p-3 rounded-sm">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>
            </div>
            {AllContacts.length === 0 && <div className="flex-none text-center w-full align-middle text-blue-700">
                <h1 className="text-3xl">No Contact Found Please add contact from <br /> Create Contact Button</h1>
            </div>}  

            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

{
    AllContacts.map((person:Contact) => {
        return <div key={person.id} className="bg-blue-900 rounded-md shadow-xl  m-4 p-2 text-center text-white">
            <div className="w-3/4 m-auto  ">
                <img className="w-full rounded-full" src={profile} alt="" />
                   <div className="text-left text">
                    <p>First Name : {person.fname}</p>
                    <p>Last Name  : {person.lname}</p>
                    <p>Email   : {person.email}</p>
                    <p>Status  : {person.status === "active" ? "Active" : "Inactive"}</p>
                </div>
            </div>

            <div className="flex justify-between my-2">
                <Link to={`edit/${person.id}`}>
                    <button className="rounded p-2 bg-emerald-400 text-black">
                        Edit
                    </button>
                </Link>
                <button onClick={() => dispatch(removeContact(person.id))} className="rounded-sm p-2 bg-red-600 text-white">Delete</button>
            </div>
        </div>
    })
}


</div>
    </div>
  )
}
