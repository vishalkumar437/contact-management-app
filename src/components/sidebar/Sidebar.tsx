import contact from "../../assets/edit.png";
import bar from "../../assets/line-chart.png";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="flex border-r-2">
      <div className="flex h-screen p-4 bg-white w-40">
        
          <div className="flex-1 font-bold">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm pt-40">
                <Link
                  to="/"
                  className="flex items-center p-2 space-x-3 font-bold rounded-md hover:font-outline"
                >
                  <img src={contact} alt="contact" className="h-8" />
                  <span>Contacts</span>
                </Link>
              </li>
              <li className="rounded-sm pt-20">
                <Link
                  to="/dashboard"
                  className="flex items-center p-2 space-x-3 rounded-md font-bold hover:font-outline"
                >
                  <img src={bar} alt="" className="h-8"/>
                  <span>Charts And Maps</span>
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
    );
}
