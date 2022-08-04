import { RefObject } from "react"
import { Errors, Functions } from "@contexts/TerminalContext"
import i18n from "i18next"

const LanguageSetting = (inputRef: RefObject<HTMLInputElement> | null, func: Functions) => {

    const { setLanguage, setErrors } = func

    const value = inputRef?.current?.value.toLowerCase()
    const french: boolean = value === 'fr' || value === 'french' || value === 'français' || value === 'francais'
    const english: boolean = value === 'en' || value === 'english' || value === 'anglais'

    switch (true) {
        case (value === undefined || value === ""): setErrors({ language: i18n.t('traduction:empty-error') })
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
            setErrors({ language: i18n.t('traduction:language-error') })
            break
    }

    if (inputRef?.current) {
        inputRef.current.value = ""
    }

}

const CountryJokeSetting = (inputRef: RefObject<HTMLInputElement> | null, func: Functions) => {

    const { setResCountryJoke, setErrors } = func

    const value = inputRef?.current?.value.toLowerCase()
    const yes = value === 'yes' || value === 'y' || value === 'oui' || value === 'o'
    const no = value === 'no' || value === 'n' || value === 'non'

    switch (true) {
        case (value === undefined || value === ""): setErrors({ resCountryJoke: i18n.t('traduction:empty-error') })
            break
        case (yes):
            setErrors({ resCountryJoke: "" }),
                setResCountryJoke(i18n.t('traduction:yes'))
            break
        case (no):
            setErrors({ resCountryJoke: "" }),
                setResCountryJoke(i18n.t('traduction:no'))
            break
        case (!yes && !no):
            setErrors({ resCountryJoke: i18n.t('traduction:country-joke-error') })
            break
    }

    if (inputRef?.current) {
        inputRef.current.value = ""
    }

}

export { LanguageSetting, CountryJokeSetting }