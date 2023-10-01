import React from 'react';
import './styles.scss';

const Input = ({ label, err, onChange }) => {
    return (
        <div className='input-wrapper'>
            <label>{label}</label>
            <input type='text' className='custom-input' placeholder='Введите имя' onChange={onChange} />
            {err && <p>{err}</p>}
        </div>
    )
}

export default Input;
