import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '../../hooks/use-theme';
import { FaHome, FaInfoCircle, FaSun, FaMoon } from "react-icons/fa";
import { RiIncreaseDecreaseFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";
import { GiDeathStar } from "react-icons/gi";
import './Header.css';

const Header = () => {

    const { theme, setTheme } = useTheme();

    const title = `Switch ${theme === 'dark' ? 'Light' : 'Dark'} Theme`;

    const handleSwitchTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return (
        <header className='header'>
            <ul className="header__nav">
                <li className="header__link" title='Home'>
                    <Link to='/'>
                        <FaHome />
                    </Link>
                </li>
                <li className="header__link" title="Contacts">
                    <Link to='/contacts'>
                        <MdContacts />
                    </Link>
                </li>
                <li className="header__link" title='About'>
                    <Link to='/about'>
                        <FaInfoCircle />
                    </Link>
                </li>
                <li className="header__link" title='Counter'>
                    <Link to='/counter-redux'>
                        <RiIncreaseDecreaseFill />
                    </Link>
                </li>
                <li className="header__link" title='SWAPI'>
                    <Link to='/swapi'>
                        <GiDeathStar />
                    </Link>
                </li>
            </ul>
            <button
                className='switch-theme'
                title={title}
                onClick={handleSwitchTheme}
            >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </header>
    );
}

export default Header;