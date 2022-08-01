import React, { useState, createContext, Dispatch, SetStateAction } from 'react'

interface TerminalContextProps {
    children: React.ReactNode
}

type Values = {
    language: string
    name: string
    status: string
}

type Functions = {
    setLanguage: Dispatch<SetStateAction<string>>
    setName: Dispatch<SetStateAction<string>>
    setStatus: Dispatch<SetStateAction<string>>
}

interface TerminalContextInterface {
    values: Values
    func: Functions
}

const TerminalContext = createContext<TerminalContextInterface | null>(null)


const TerminalContextProvider = ({ children }: TerminalContextProps) => {

    const [language, setLanguage] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [status, setStatus] = useState<string>("")

    const values: Values = {
        language,
        name,
        status,
    }

    const func: Functions = {
        setLanguage,
        setName,
        setStatus,
    }

    return (
        <TerminalContext.Provider value={{ values, func }}>
            {children}
        </TerminalContext.Provider>
    )
}

export { TerminalContext, TerminalContextProvider }