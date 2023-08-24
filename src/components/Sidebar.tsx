//It is used to design the dashboard of the Web App
import contact from "../assets/contact-book.png";
import bar from "../assets/bar-chart.png";
import { Link } from "react-router-dom";
import React from "react";
export default function Sidebar() {
  return (
    <div className="flex border-r-2">
      <div className="flex flex-col h-screen p-4 bg-white w-40">
        
          <div className="flex-1 font-bold">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 font-bold rounded-md hover:font-outline"
                >
                  <img src={contact} />
                  <span>Contacts</span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md font-bold hover:font-outline"
                >
                  <img src={bar} alt="" />
                  <span>Charts And Maps</span>
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
    );
}
