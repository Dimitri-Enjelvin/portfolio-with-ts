import React from "react";

import TText from "../components/TText";
import TInput from "../components/TInput";

import useLoading from "@hooks/useLoading";
import useTerminal from "../hooks/useTerminal";

import styles from '../styles.module.scss'

const TWindow = () => {

    const { isLoading } = useLoading()
    const { values, func, errors } = useTerminal()
    const { language, name, status } = values

    return (
        <div className={styles.t_window}>
            <TText text="Please enter your language (FR/EN)" input={language} prevInput="not-null" type={errors.language ? "error" : "normal"} />
            <TInput />
        </div>
    )
}

export default TWindow