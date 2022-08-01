import React from 'react'

import styles from '../styles.module.scss'

interface TBubbleProps {
    color: string
}

const TBubble = ({ color }: TBubbleProps) => {

    if (color === 'red') {
        return (
            <div className={styles.bubble_red} />
        )
    }

    if (color === 'orange') {
        return (
            <div className={styles.bubble_orange} />
        )
    }

    if (color === 'green') {
        return (
            <div className={styles.bubble_green} />
        )
    }

}

export default TBubble