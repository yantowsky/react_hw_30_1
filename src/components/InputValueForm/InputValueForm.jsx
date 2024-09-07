import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import inputTextSchema from '../../schemes/inputTextSchema';
import './InputValueForm.css';
import { fetchSwapi } from '../../features/getInfoSwapi/getInfoSwapiSlice';

const InputValueForm = ({ spanText, placeholder, titleButton, textButton, reducer }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: 'onChange',
        resolver: yupResolver(inputTextSchema)
    });

    const dispatch = useDispatch();
    const addValue = ({ inputValue }) => {
        dispatch(reducer({ inputValue }));
        reducer.type === 'swapi/setSwapi' && dispatch(fetchSwapi(inputValue));
        reset();
    }

    return (
        <div className='input-value__form'>
            <form className='input-value__add' onSubmit={handleSubmit(addValue)}>
                {spanText &&
                    <span>
                        {spanText}
                    </span>}
                <input
                    {...register('inputValue')}
                    type="text"
                    placeholder={placeholder}
                    autoFocus
                    autoComplete="off"
                />
                {<p className='input-value__error'>{errors.inputValue?.message}</p>}
                <button
                    type='submit'
                    title={titleButton}
                >
                    {textButton}
                </button>
            </form>
        </div >
    );
}

export default InputValueForm;