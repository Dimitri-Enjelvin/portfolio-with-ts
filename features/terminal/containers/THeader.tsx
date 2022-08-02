import React from 'react'

import TBubble from '../components/TBubble'
import TLink from '../components/TLink'

import styles from '../styles.module.scss'

const THeader = () => {
    return (
        <div className={styles.header_container}>

            <div className={styles.bubbles_container}>
                <TBubble color="red" />
                <TBubble color="orange" />
                <TBubble color="green" />
            </div>

            <div className={styles.link_container}>
                <TLink />
            </div>

        </div>
    )
}

export default THeader