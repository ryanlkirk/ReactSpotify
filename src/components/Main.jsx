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
                    <section className="mainBodyContent">
                        <TopNav />
                        <InnerContent />
                    </section>

                </div>
                <SpotifyPreviewBanner />
            </main>
        </>

    )
}

export default Main;



