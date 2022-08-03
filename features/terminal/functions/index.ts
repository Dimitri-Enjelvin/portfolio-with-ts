import { RefObject } from "react"
import { Errors } from "@contexts/TerminalContext"
import i18n from "i18next"

const LanguageSetting = (inputRef: RefObject<HTMLInputElement> | null, setState: React.Dispatch<React.SetStateAction<string>>, setError: React.Dispatch<React.SetStateAction<Errors>>) => {

    // i18n.changeLanguage("fr")

    const value = inputRef?.current?.value.toLowerCase()
    const french = 'fr' || 'french' || 'français' || 'francais'
    const english = value === 'en' || value === 'english' || value === 'anglais'

    // empty input case

    if (value === undefined || value === "") {
        console.log('please type something')
    }

    switch (value) {
        case (undefined || ""): setError()
            break
        case french: setError({ language: "" }), i18n.changeLanguage('fr'), setState(i18n.t(''))
    }

}

export { LanguageSetting }