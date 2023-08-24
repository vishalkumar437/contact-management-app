import {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeContact } from "../../Action/action"
import {Contact,State} from "../../interface/interface";
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
        return <div key={person.id} className="bg-teal-700 rounded-md shadow-xl m-4 p-1 text-center text-white">
            <div className="w-3/4 m-auto  ">
                <img className="w-full rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAANlBMVEWVu9////+QuN6Mtt3K3O7j7Pby9vvE2OyavuCvy+akxOPY5fLp8Pj6/P260umqyOWFstvR4PDphOmSAAADqElEQVR4nO1b27KiMBCECbkCgfz/zy43dT0HyTRmdGuLfrJKyzSTuXZIVV24cOFCARCpGURfWVy54G3TzmisD059lMb00LE19d8wOlafs8UY2noPbRg/sj45vbv+DO0+YAayL9efYcUp0GsDbGYQpqBMhsDkk0qSAHVZAnXdCVqB9mPgJ1oxChRZBOo6ilHomQx6ofVVYhKo6yTjjcQmUNci20ANwKARoZBPBQ8YCQIDQKCuh/IEoE0Q2YZsQXiGQHlwiBtMjuCKM8DcQMIRPMjAlyZAKIPitSHTGn2CARaMAuF4MTjhB8WbZnZ/dEN5T4TzQfG0/P2cGLhN4oo+FGfw/crEGlYeEBhbFG9auUGX75bBcJQYWgLEoLwjVvyJaYbI1AQ1iiIqwj8wsSCOIOIG1QgwkBHVCJidhQQEfnESmNkWMGSsFWJiFrtPEhQVeUYQqIs3KJ4RRHVVjhFE1IsbWAVSTsubMeb7lE5Y4ne5CtnLueGK7D7I7sFC4dvnC1NIHlXpRlTav1N4vRFRnMBqYvL7acFsk5rcRlBl1fZhr1CnbWllZTiQctPE0G5mVi49h2Wf3PbVOP+s+AEoqSquueh+fkI0JG1mGr3RaXicdq6TTRerciSmp/f6vvOde3Ag50IIztF9fXL3pGm0L2OJ6VnbJ4P3/rXDq/j803Z4+ySYyP72ex32Oajwe6Qw9j07kN8vA3r49b+TrfZHmv4dNeVgSOma4GZPWFG50LyumufHl8zRltGtjd77aFt93LmcPfiCBbzXOFmvsHH9GKeaBvBQ5RinZmlUvjvGiSlKlTTBKV0J1A9zwPXFgoGwAg6HERMw8zBoE+8KE4ADEhbz8wDbeEAv4QLUVUAVmQNQaUbeduACY1A2Ia6A0mLxbDADygiglM9DCyXm8o44uSJCADzS4QESuEo2Jw8AxQk+XOQBaJpFQgEKBpFQgIJBSYTCFAx8BiQRClMw8HchK9mdAyD0Fe4R7wz44SgTjMAbQkLpAEgIAi3aCnajJpSQgJQEv3fDBVtIEEqJQFK8GEAvJmNgqznfj8ay8skDkJCSyleGPgHrz9r5jpb6Dox1qIpCozsQKTF0jRtP6XlEzma0yjyMtu4deZuUG5ruLAvTNUMJhZ9UNfy8wsVYvY1DwUOO5Q5dsElzQqTXyQaZ+3aLij7EpDuzx6Q3nU7TgxMJX3AjtZzuDD42KS13+1Jqoh+W056P3vCbH1Wp7YLjd644Xrhw4T/DHzhTKer8tGZTAAAAAElFTkSuQmCC" alt="" />
                   <div className="text-left text">
                    <p>First Name : {person.fname}</p>
                    <p>Last Name  : {person.lname}</p>
                    <p>Email   : {person.email}</p>
                    <p>Status     : {person.status === "active" ? "Active" : "Inactive"}</p>
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
