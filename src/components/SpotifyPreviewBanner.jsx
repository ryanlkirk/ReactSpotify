import Button from './Button'

const SpotifyPreviewBanner = () => {
    return (
        <footer className="previewBanner">
            <div>
                <p className="footerTopText">Preview of Spotify</p>
                <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <Button btnType="pill" text="Sign Up Free"></Button>
        </footer>
    )

}

export default SpotifyPreviewBanner;