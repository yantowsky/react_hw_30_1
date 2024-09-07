import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TotalTodos from '../TotalTodos/TotalTodos';
import ClearButton from '../ClearButton/ClearButton';
import './Footer.css';


const Footer = () => {
    const yearNow = new Date().getFullYear();
    const location = useLocation();
    const {status} = useSelector(state => state.swapi);

    return (
        <footer className='footer'>
            {location.pathname === "/" && <TotalTodos />}
            {location.pathname === "/swapi" && status !== null && <ClearButton />}
            <p className='year-todos'>
                {yearNow}
            </p>
        </footer>
    );
}

export default Footer;