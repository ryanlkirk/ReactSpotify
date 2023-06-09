// import { useState } from 'react'
import GetLangText from '../app/helpers/language';
import logo from '../images/spotify.png'

const LeftNav = (props) => {
    // const [activeLink, setActiveLink] = useState("home");

    return <nav className="leftNav">
        <section>
            <img className='left-nav-logo'
                src={logo}
                alt="Description"
            />
            <ul>
                <li>
                    <div className='nav-item' draggable="false">
                        <img
                            className='nav-item-icon'
                            draggable="false"
                            src={require('../images/ui-elements/filled-house.svg').default}
                            alt="Home"
                            width="22px"
                            height="22"
                        />
                        {GetLangText("Home")}
                    </div>
                </li>
                <li>
                    <div className='nav-item inactive-nav-item' draggable="false">
                        <img
                            className='nav-item-icon'
                            draggable="false"
                            src={require('../images/ui-elements/search.svg').default}
                            alt="Search"
                            width="22px"
                            height="22"
                        />
                        {GetLangText("Search")}
                    </div>
                </li>
                <li>
                    <div className='nav-item inactive-nav-item' draggable="false">
                        <img
                            className='nav-item-icon'
                            draggable="false"
                            src={require('../images/ui-elements/library-outlined.svg').default}
                            alt="Library"
                            width="22px"
                            height="22"
                        />
                        {GetLangText("YourLibrary")}
                    </div>
                </li>
            </ul>

        </section>
        <section>
        
            <div className='cookies'><a draggable="false" href="https://www.spotify.com/legal/cookies-policy/" target="_blank" rel="noreferrer"><span>Cookies</span></a></div>
            <button className='language-btn' onClick={() => props.setLanguageWindowOpen(true)}>
                <img
                    draggable="false"
                    src={require('../images/ui-elements/language.svg').default}
                    alt="Language Selection"
                    width="16px"
                    height="16px"
                />
                {GetLangText("Language")}
            </button>
        </section>


    </nav>
}

export default LeftNav;