import {useState, useCallback} from 'react'
import axios from 'axios'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = "GET", body = null) => {

        setLoading(true)

        try {
            body = JSON.stringify(body)
            const res = await axios(url, {method, body})
            console.log(res);

            if(!res.ok) {
                throw new Error(`Something with ${url} went wrong error type ${res.status}`)
            }
            
            const data = res

            setLoading(false)
            return data
        } catch(e) {
            setLoading(false)
            setError(e.message)
            throw e
        }

    }, [])


    const clearCahed = useCallback(() => setError(null), [])

    return {loading, error, request, clearCahed}
}