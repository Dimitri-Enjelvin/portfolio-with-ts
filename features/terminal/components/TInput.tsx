import React, { useRef } from 'react'

import styles from '../styles.module.scss'

interface TInputProps {

}

const TInput = ({ }: TInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault()

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