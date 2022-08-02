import { useState, useEffect } from 'react'

export default function useLoading() {

    const [isLoading, setLoading] = useState(false)


    useEffect(() => {

        setTimeout(() => {
            setLoading(prev => !prev)
        }, 4500);

    }, [])


    return { isLoading }
}