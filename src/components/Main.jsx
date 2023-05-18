import SpotifyPreviewBanner from './SpotifyPreviewBanner'
import LeftNav from './LeftNav';
import TopNav from './TopNav';
import InnerContent from './InnerContent';

const Main = () => {
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



