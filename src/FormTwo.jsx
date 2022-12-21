import React from 'react';
import './App.scss'
import { useInputWithValidation } from './hook/customhook';

const FormTwo = () => {
    const input = useInputWithValidation('')
    const textarea = useInputWithValidation('')

    const isValid = input.validateInp(input.value) ? "red" : null
    const isValidArea = input.validateInp(textarea.value) ? "red" : null

    return (
        <div>   
            <form>
                <input type="text" className='readOnly' readOnly value={`${input.value} / ${textarea.value} `} />    
                <label htmlFor="inpone">Example input</label>

                <input style={{color: isValid}} type="text" id='inpone' value={input.value} onChange={input.onChange} />
                
                <label htmlFor="inptwo">Example texarea</label>
                <textarea style={{color: isValidArea}} id='inptwo' value={textarea.value} onChange={textarea.onChange} ></textarea>
            </form>            
        </div>
    );
};

export default FormTwo;