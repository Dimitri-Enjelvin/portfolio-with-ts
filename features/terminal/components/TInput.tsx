import React, { useRef } from 'react'

import styles from '../styles.module.scss'

interface TInputProps {
    onFunc: React.Dispatch<React.SetStateAction<string>>
}

const TInput = ({ onFunc }: TInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()

        onFunc("FR")
    }
    return (
        <form onSubmit={onSubmit}>
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