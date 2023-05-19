import SpotifyPreviewBanner from './SpotifyPreviewBanner'
import LeftNav from './LeftNav';
import TopNav from './TopNav';
import InnerContent from './InnerContent';
import { LanguageContext } from '../languageContext';
import { useContext } from 'react';

const Main = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    console.warn(language)

    return (
        <main>
            <div className='mainContent'>
            <LeftNav />
            <div style={{width: "100%"}}>
            <TopNav />
            <InnerContent />
            </div>

            </div>
           
            <SpotifyPreviewBanner />
        </main>
    )
}

export default Main;



