import { NavLink, Link } from "react-router-dom";
import '../index.css'

function NavBar() {
    return (
        <div className="flex items-center justify-between px-10 py-6 mb-4">
            <h1 className="font-black text-4xl">
                <Link to="/">Share<span className="text-light">Ease</span></Link>
            </h1>
            <ul className="flex gap-12 justify-around text-s ">
                <li className="cursor-pointer"><NavLink to="/share">Share Files</NavLink></li>
                <li className="cursor-pointer"><NavLink to="/shorten">Shorten Link</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;