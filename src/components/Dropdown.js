import React, { useState } from 'react';
import { MenuItems } from './MenuItems.js';
import './Dropdown.css';
import { Link } from 'react-router-dom';

export default function Dropdown({ id }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.filter((item) => item.id === id).map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}