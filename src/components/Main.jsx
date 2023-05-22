import SpotifyPreviewBanner from './SpotifyPreviewBanner'
import LeftNav from './LeftNav';
import TopNav from './TopNav';
import InnerContent from './InnerContent';
import LanguagePopover from './LanguagePopover';
import { useState } from 'react';


const Main = () => {
    const [languageWindowOpen, setLanguageWindowOpen] = useState(false)

    return (
        <>
            {
                languageWindowOpen && <LanguagePopover setLanguageWindowOpen={setLanguageWindowOpen} />
            }

            <main>
                <div className='mainContent'>
                    <LeftNav setLanguageWindowOpen={setLanguageWindowOpen} />
                    <container className="mainBodyContent">
                        <TopNav />
                        <InnerContent />
                    </container>

                </div>
                <SpotifyPreviewBanner />
            </main>
        </>

    )
}

export default Main;



