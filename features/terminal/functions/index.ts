import { RefObject } from "react"
import { Errors, Functions } from "@contexts/TerminalContext"
import i18n from "i18next"

const LanguageSetting = (inputRef: RefObject<HTMLInputElement> | null, func: Functions) => {

    const { setLanguage, setErrors } = func

    const value = inputRef?.current?.value.toLowerCase()
    const french: boolean = value === 'fr' || value === 'french' || value === 'français' || value === 'francais'
    const english: boolean = value === 'en' || value === 'english' || value === 'anglais'

    switch (true) {
        case (value === undefined || value === ""): setErrors({ language: "Please type something" })
            break
        case (french):
            setErrors({ language: "" }),
                i18n.changeLanguage('fr'),
                setLanguage(i18n.t('FR'))
            break
        case (english):
            setErrors({ language: "" }),
                i18n.changeLanguage('en'),
                setLanguage(i18n.t('EN'))
            break
        case (!french && !english):
            setErrors({ language: 'language does not exist' })
            break
    }

}

export { LanguageSetting }