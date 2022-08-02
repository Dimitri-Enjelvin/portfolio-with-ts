import React from 'react'

import styles from '../styles.module.scss'

interface TText {
    text: string
    input: string
    prevInput: string
    type: string
}

const TText = ({ text, input, prevInput, type }: TText) => {

    if (!prevInput) return null

    return (
        <div className={styles.t_text_container}>
            <p className={styles.t_text}>{text}</p>
            {!input
                ? null
                : <p className={type === "error" ? styles.t_text_error : styles.t_text}>
                    {input}
                </p>
            }
        </div>
    )
}

export default TText