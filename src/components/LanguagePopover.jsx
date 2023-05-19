const LanguagePopover = (props) => {
    return (
        <div className="languagePopover">
            <section className="languagePicker"><span onClick={() => props.setLanguageWindowOpen(false)}>close</span></section>
        </div>
    )
}

export default LanguagePopover;