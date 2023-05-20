import Button from './Button'
import GetLangText from '../app/helpers/language';

const SpotifyPreviewBanner = () => {
    return (
        <footer className="previewBanner">
            <div>
                <p className="footerTopText">{GetLangText("PreviewSpotify")}</p>
                <p>{GetLangText("BottomFooterText")}</p>
            </div>
            <Button btnType="pill" text={GetLangText("SignUpFree")}></Button>
        </footer>
    )

}

export default SpotifyPreviewBanner;