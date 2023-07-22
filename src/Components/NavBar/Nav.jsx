import React, { useState } from "react";
import './Nav.css'
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle =()=> {
        setIsOpen(!isOpen)
    }
    return (
        <div className={`navbar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={handleToggle}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
            </button>
<nav>
    <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/About">About</a>
        </li>
        <li>
            <a href="/Services">Services</a>
        </li>
        <li>
            <a href="/Contact">Contact</a>
        </li>
    </ul>
</nav>
        </div>
    )
}
export default Nav