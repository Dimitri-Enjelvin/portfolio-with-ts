import React from 'react';

import { TerminalContextProvider } from '@contexts/TerminalContext'
import { THeader, TWindow } from '@features/terminal'

import styles from '@styles/Terminal.module.scss'


const Terminal = () => {
    return (
        <TerminalContextProvider>
            <div className={styles.terminal_container}>
                <THeader />
                <TWindow />
            </div>
        </TerminalContextProvider>
    )
}

export default Terminal