import SpotifyPreviewBanner from './SpotifyPreviewBanner'
import LeftNav from './LeftNav';
import TopNav from './TopNav';
import InnerContent from './InnerContent';
import { LanguageContext } from '../languageContext';
import { useContext } from 'react';
import LanguagePopover from './LanguagePopover';
import { useState } from 'react';


const Main = () => {
    const [languageWindowOpen, setLanguageWindowOpen] = useState(false)
    // const { language, changeLanguage } = useContext(LanguageContext); 

    return (
        <>
            {
                languageWindowOpen && <LanguagePopover setLanguageWindowOpen={setLanguageWindowOpen} />
            }

            <main>
                <div className='mainContent'>
                    <LeftNav setLanguageWindowOpen={setLanguageWindowOpen} />
                    <div style={{ width: "100%" }}>
                        <TopNav />
                        <InnerContent />
                    </div>

                </div>
                <SpotifyPreviewBanner />
            </main>
        </>

    )
}

export default Main;



