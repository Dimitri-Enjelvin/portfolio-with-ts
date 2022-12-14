import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

interface TerminalContextProps {
    children: React.ReactNode
}

type Values = {
    language: string
    resCountryJoke: string
    name: string
    status: string
}

export type Errors = {
    language?: string
    resCountryJoke?: string
    name?: string
    status?: string
}

export type Functions = {
    setLanguage: Dispatch<SetStateAction<string>>
    setResCountryJoke: Dispatch<SetStateAction<string>>
    setName: Dispatch<SetStateAction<string>>
    setStatus: Dispatch<SetStateAction<string>>
    setErrors: Dispatch<SetStateAction<Errors>>
}


interface TerminalContextInterface {
    values: Values
    func: Functions
    errors: Errors
}

const TerminalContext = createContext<TerminalContextInterface>(undefined!)


const TerminalContextProvider = ({ children }: TerminalContextProps) => {

    const [language, setLanguage] = useState<string>("")
    const [resCountryJoke, setResCountryJoke] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [status, setStatus] = useState<string>("")
    const [errors, setErrors] = useState<Errors>({
        language: "",
        resCountryJoke: "",
        status: "",
        name: "",
    })

    const values: Values = {
        language,
        resCountryJoke,
        name,
        status,
    }

    const func: Functions = {
        setLanguage,
        setResCountryJoke,
        setName,
        setStatus,
        setErrors,
    }

    return (
        <TerminalContext.Provider value={{ values, func, errors }}>
            {children}
        </TerminalContext.Provider>
    )
}

export { TerminalContext, TerminalContextProvider }