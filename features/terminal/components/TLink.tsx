import React from 'react'
import Image from 'next/image'

import Logo from '@public/logo/github-logo.png'
import styles from '../styles.module.scss'

const TLink = () => {
    return (
        <div className={styles.t_link}>
            <a href="https://github.com/Dimitri-Enjelvin">
                <Image src={Logo} alt="Github logo" width={16} height={16} />
                <p className="terminal-link-text">github.com/Dimitri-Enjelvin</p>
            </a>
        </div>
    )
}

export default TLink