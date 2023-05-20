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


    return (
        <div className="languagePopover">
            <section className="languagePicker">
                <span onClick={() => props.setLanguageWindowOpen(false)}>close</span>
                <span onClick={() => dispatch(changeLangauge("en"))}>English</span>
                <span onClick={() => dispatch(changeLangauge("fr"))}>French</span>
            </section>
        </div>
    )
}

export default LanguagePopover;