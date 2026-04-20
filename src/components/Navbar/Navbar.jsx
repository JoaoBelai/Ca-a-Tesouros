import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { Footprints, UserRound, House, Map } from 'lucide-react';

export default function Navbar(){
    const navClass = ({ isActive }) => isActive ? "navLink active" : "navLink";
    return(
        <nav className="bottomNav">
            <ul className="navList">

                <li>
                    <NavLink to="/map" className={navClass}>
                        <Map className="navIcon" />
                        <p className="navLabel">MAPA</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/" className={navClass}>
                        <House className="navIcon" />
                        <p className="navLabel">HOME</p>
                    </NavLink>
                </li>
                
                <li>
                    <NavLink to="/suspects" className={navClass}>
                        <UserRound className="navIcon" />
                        <p className="navLabel">SUSPEITOS</p>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/proofs" className={navClass}>
                        <Footprints className="navIcon" />
                        <p className="navLabel">PISTAS</p>
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}