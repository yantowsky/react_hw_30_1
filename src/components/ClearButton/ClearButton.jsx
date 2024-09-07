import React from 'react';
import { useDispatch } from 'react-redux';
import { delSwapi } from '../../features/getInfoSwapi/getInfoSwapiSlice';
import { MdCleaningServices } from "react-icons/md";
import './ClearButton.css';

const ClearButton = () => {
    const dispatch = useDispatch();

    return (
        <button
            className='swapi-clear'
            title='Clear Data'
            onClick={() => dispatch(delSwapi())}
        >
            <MdCleaningServices />
        </button>
    )
}

export default ClearButton;