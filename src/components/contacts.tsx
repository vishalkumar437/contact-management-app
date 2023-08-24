import React from 'react'
import { Link } from "react-router-dom"
export default function contacts() {
  return (
    <div>
        <div className="m-4">
                <button className="rounded-full shadow shadow-slate-700 font-bold bg-teal-600 p-3 text-2xl">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>

            </div>  
    </div>
  )
}
