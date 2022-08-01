import { useTranslation } from "react-i18next"


const useLanguage = () => {

    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;


    const handleLanguageChangeToFR = () => {
        i18n.changeLanguage("fr")
    }

    const handleLanguageChangeToEN = () => {
        i18n.changeLanguage("en")
    }

    return { currentLanguage, handleLanguageChangeToEN, handleLanguageChangeToFR }
}

export default useLanguage