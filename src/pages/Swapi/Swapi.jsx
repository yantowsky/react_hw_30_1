import React from 'react';
import InputValueForm from '../../components/InputValueForm/InputValueForm';
import { TbHttpGet, } from "react-icons/tb";
import { setSwapi } from '../../features/getInfoSwapi/getInfoSwapiSlice';
import { useSelector } from 'react-redux';
import { getReasonPhrase } from 'http-status-codes';
import './Swapi.css';

const Swapi = () => {
    const { inputValue, objDataSwapi, status, error } = useSelector(state => state.swapi);
    const arrDataSwapi = [];

    for (const [key, value] of Object.entries(objDataSwapi)) {
        const newValue = Array.isArray(value) ? value.join('; ') : value;
        arrDataSwapi.push(`${key}: ${newValue}`);
    }

    return (
        <main className='swapi'>
            {status !== 'resolved' ? (
                <InputValueForm
                    spanText='https://swapi.dev/api/'
                    placeholder='Need a hint? try people/1/ or planets/3/ or starships/9/'
                    textButton={<TbHttpGet />}
                    titleButton='Get info'
                    reducer={setSwapi}
                />
            ) : (
                <div className='input-value__form'>
                    <div className='input-value__add'>
                        <span >
                            https://swapi.dev/api/{inputValue}
                        </span>
                    </div>
                </div>
            )}
            {status === 'loading' && (
                <div className='swapi-list swapi-list--mod'>
                    <span>
                        Loading SWAPI..
                    </span>
                </div>
            )}
            {status === 'resolved' && (
                <ul className='swapi-list' >
                    {arrDataSwapi.map((item, index) => (
                        <li key={index} className='swapi-list__item'>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            {status === 'rejected' && (
                <div className='swapi-list swapi-list--mod'>
                    <span>
                        Server Error! Status Code: {error} - {getReasonPhrase(error)}
                    </span>
                </div>
            )}
        </main >
    );
}

export default Swapi;