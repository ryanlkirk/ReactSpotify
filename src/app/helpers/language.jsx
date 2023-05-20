
import { useSelector } from 'react-redux'

const GetLangText = () => {
    const lang = useSelector((state) => state.language)
    if(lang.value === "fr") {
       return  "French"
    } else {
        return "English"
    }
}

export default GetLangText;