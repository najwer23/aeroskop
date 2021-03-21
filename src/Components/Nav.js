import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const menuRoutes = [
    { path: "/", name: 'Home'},
    // { path: "/test", component: Test, name: 'Test' }
];


class Hamburger extends Component {
    componentDidMount() {
        window.addEventListener("resize", this.menuMobileHide);
    }
    componentWillUnmount() {
        window.addEventListener("resize", null);
    }

    menuMobileHide() {
        const hamburgerBtn = document.querySelector('.hamburger-button');
        const menuMobile = document.querySelector('.menu-mobile');
        
        if (window.innerWidth > 1000) {
            document.body.classList.remove("scroll");
            hamburgerBtn.classList.remove("hamburger-active");
            menuMobile.classList.remove('menu-mobile-active');
            hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('hamburger-active'));
        }
    }

    menuMobileClick() {
        const hamburgerBtn = document.querySelector('.hamburger-button');
        const menuMobile = document.querySelector('.menu-mobile');

        hamburgerBtn.classList.toggle('hamburger-active');
        hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('hamburger-active'));
        menuMobile.classList.toggle('menu-mobile-active');
        document.body.classList.toggle('scroll');
    }

    render() {
        return (
            <div className="hamburger">
                <button className="hamburger-button" onClick={this.menuMobileClick} aria-expanded="false">
                    <span className="screen-read-only">Open / Close Menu</span>
                    <span className="hamburger-box">
                        <span className="hamburger-box-line"></span>
                    </span>
                </button>
            </div>
        )
    }
}

class MobileMenu extends Hamburger {
    render() {
        return (
            <div className="menu-mobile">   
                <ul className="menu-mobile-links">
                    <li><FontAwesomeIcon style={{ color: "orange" }} icon={faFilm} size="lg" /> Aeroskop</li>
                    {menuRoutes.map((v, i) => <li onClick={this.menuMobileClick} key={i}><Link to={v.path}>{v.name}</Link></li>)}
                    <li>Mariusz Najwer <br />2021</li>
                </ul>
            </div>
        )
    } 
}

export default function Nav() {
    return (
        <nav>
            <MobileMenu />
            <div className="menu">
                <div className="menu-box">
                    <Hamburger />
                    <div className="menu-title"> <FontAwesomeIcon style={{ color: "orange" }} icon={faFilm} size="lg" /> Aeroskop </div>
                    <ul className="menu-list">
                        {menuRoutes.map((v, i) => <li key={i}><Link to={v.path}>{v.name}</Link></li>)}
                    </ul>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#24272b" fillOpacity="1" d="M0,96L120,80C240,64,480,32,720,21.3C960,11,1200,21,1320,26.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="#0099ff" fill-opacity="1" d="M0,96L120,80C240,64,480,32,720,21.3C960,11,1200,21,1320,26.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
        </nav>
    )
}
