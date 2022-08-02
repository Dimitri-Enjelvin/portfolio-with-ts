import React from "react";
import { useTranslation } from "react-i18next";

import TText from "../components/TText";
import TInput from "../components/TInput";

import useLoading from "@hooks/useLoading";
import useTerminal from "../hooks/useTerminal";

import styles from '../styles.module.scss'

const TWindow = () => {

    const { t } = useTranslation()
    const { isLoading } = useLoading()
    const { values, func, errors } = useTerminal()
    const { language, name, status } = values

    return (
        <div className={styles.t_window}>
            <TText text="Please enter your language (FR/EN)" input={language} prevInput="not-null" type={errors.language ? "error" : "normal"} />
            <TText text={t('traduction:language-confirmed')} input={status} prevInput={language} type={errors.language ? "error" : "normal"} />
            <TInput onFunc={func.setLanguage} />
        </div>
    )
}

export default TWindow