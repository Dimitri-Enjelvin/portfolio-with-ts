import React, { RefObject, useRef } from 'react'
import { Errors, Functions } from '@contexts/TerminalContext'

import styles from '../styles.module.scss'

interface TInputProps {
    onSubmit: (inputRef: RefObject<HTMLInputElement> | null, func: Functions) => void
    func: Functions
}

const TInput = ({ onSubmit, func }: TInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        console.log(inputRef.current)

        onSubmit(inputRef, func)
    }
    return (
        <form onSubmit={onSubmitForm}>
            <input
                ref={inputRef}
                className={styles.input}
                type="text"
                maxLength={50}
            />
        </form>
    )
}

export default TInput