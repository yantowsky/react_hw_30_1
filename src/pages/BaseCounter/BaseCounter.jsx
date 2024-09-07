import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../features/baseCounter/baseCounterSlice';
import './BaseCounter.css';

const BaseCounter = () => {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <main className='counter'>
            <div className='counter-wrapper'>
                <h1>Value: {counter}</h1>
                <div className='counter-buttons'>
                    <button
                        className='button-increment'
                        type="button"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                    <button
                        className='button-decrement'
                        type="button"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>
                </div>
            </div>
        </main>
    )
}

export default BaseCounter;