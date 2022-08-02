import React from "react";

import TText from "../components/TText";

import useLoading from "@hooks/useLoading";
import useTerminal from "../hooks/useTerminal";

import styles from '../styles.module.scss'

const TWindow = () => {

    const { isLoading } = useLoading()
    const { values, func, errors } = useTerminal()

    return (
        <div className={styles.t_window}>

        </div>
    )
}

export default TWindow