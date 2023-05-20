
import { useSelector } from 'react-redux'

const GetLangText = () => {
    const lang = useSelector((state) => state.language)
    if(lang.value === "fr") {
       return  "French Text"
    } else {
        return "English Text"
    }
}

export default GetLangText;