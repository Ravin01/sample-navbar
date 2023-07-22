import React, { useState } from 'react';
import './CodeNav.css';

const CodeNav = () => {
    const [classBar, setClassBar] = useState('navbar');
    const [bars, setBars] = useState('fa-solid fa-bars');
    const handleToggle = () => {
        if(classBar === 'navbar'){
            setClassBar('navbar-open')
            setBars('fa-solid fa-xmark')
        }else{
            setClassBar('navbar')
            setBars('fa-solid fa-bars')
        }
    };

    return (
        <div className='container'>
            <div className={classBar}>

                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="topNav">
                <div></div>
                <button className="toggle-button" onClick={handleToggle}>
                    <i class={bars}></i>
                </button>
            </div>
        </div>
    );
};

export default CodeNav;
