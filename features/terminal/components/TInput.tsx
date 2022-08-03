import React, { useRef } from 'react'

import styles from '../styles.module.scss'

interface TInputProps {
    onSubmit: React.Dispatch<React.SetStateAction<string>>
}

const TInput = ({ onSubmit }: TInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()
        console.log(inputRef.current)

        onSubmit("FR")
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