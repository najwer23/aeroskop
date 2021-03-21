import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'

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
                    <li>aeroskop</li>
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
