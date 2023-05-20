import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeLangauge } from "../features/languageSlice";

const LanguagePopover = (props) => {
    const lang = useSelector((state) => state.language)
    const dispatch = useDispatch();

    //keypress handler for closing language picker
    useEffect(() => {
        const handleEscKeyPress = (event) => {
            if (event.keyCode === 27) {
                // Perform the desired action when Escape key is pressed
                props.setLanguageWindowOpen(false)
            }
        };

        // Attach the event listener
        document.addEventListener('keydown', handleEscKeyPress);

        // Clean up the event listener when the component is unmounted
        return () => {
            document.removeEventListener('keydown', handleEscKeyPress);
        };
    }, []);

    const swapLangAndClose = (lang) => {
        dispatch(changeLangauge(lang))
        props.setLanguageWindowOpen(false)
    }


    return (
        <div className="languagePopover">
            <section className="languagePicker">
                <div className="languagePickerHeader">
                    <h1>Choose a language</h1>
                    <p>This updates what you read on open.spotify.com</p>
                    <span onClick={() => props.setLanguageWindowOpen(false)}>close</span>
                </div>

                <div className="languageOptions">
                    <div onClick={() => swapLangAndClose("en")}><p>English</p><p className="nativeLang">English</p></div>
                    <div onClick={() => swapLangAndClose("fr")}><p>French</p><p className="nativeLang">Français</p></div>
                </div>


            </section>
        </div>
    )
}

export default LanguagePopover;