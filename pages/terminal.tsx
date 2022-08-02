import React from 'react';

import styles from '@styles/Terminal.module.scss'

import { THeader, TWindow } from '@features/terminal'

const Terminal = () => {
    return (
        <div className={styles.terminal_container}>
            <THeader />
            <TWindow />
        </div>
    )
}

export default Terminal