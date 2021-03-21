import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'


export default function Nav() {
    const menuRoutes = [
        { path: "/", name: 'Home'},
        // { path: "/test", component: Test, name: 'Test' }
      ];

    return (
        <nav>
            <div className="menu">
                <div className="menu-box">
                    <div className="menu-title"> <FontAwesomeIcon style={{ color: "orange" }} icon={faMugHot} size="lg" /> coffee4u </div>
                    <ul className="menu-list">
                        {menuRoutes.map((v, i) => <li key={i}><Link to={v.path}>{v.name}</Link></li>)}
                    </ul>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#24272b" fillOpacity="1" d="M0,32L80,32C160,32,320,32,480,48C640,64,800,96,960,106.7C1120,117,1280,107,1360,101.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </nav>
    )
}
