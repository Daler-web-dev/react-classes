import React, { useState } from 'react';

const useInputWithValidate = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const validateInp = () => {
        return value.search(/\d/) >= 0
    }

    return {value, onChange, validateInp}

}

const Form = () => {

    const input = useInputWithValidate('')    
    const textarea = useInputWithValidate('')    

    const color = input.validateInp() ? "red" : null
    const colortwo = textarea.validateInp() ? "red" : null

    return (
        <div>
            <form>
                <input value={`${input.value} / ${textarea.value}`} readOnly className="readOnly" />
                <label htmlFor="exone">Example Input</label>
                <input type="text" id="exone" style={{color: color}} value={input.value} onChange={input.onChange} />
                <label htmlFor="extwo">Second Example Input</label>
                <textarea id='extwo' style={{color: colortwo}} value={textarea.value} onChange={textarea.onChange} ></textarea>
            </form>
        </div>
    );
};

export default Form;