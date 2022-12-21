import { useState } from "react"

export function useInputWithValidation(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const validateInp = (text) => {
        return text.search(/\d/) >= 0 
    }

    return {value, onChange, validateInp}
}