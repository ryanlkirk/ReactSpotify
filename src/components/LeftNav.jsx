// import { useState } from 'react'
import logo from '../images/spotify.png'


const LeftNav = () => {
    // const [activeLink, setActiveLink] = useState("home");

    return <navbar className="leftNav">
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
                        Home
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
                        Search
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
                        Your Library
                    </div>
                </li>
            </ul>

        </section>
        <section>
            <div className='cookies'>Cookies</div>
            <button className='language-btn'>
                <img
                    draggable="false"
                    src={require('../images/ui-elements/language.svg').default}
                    alt="Language Selection"
                    width="16px"
                    height="16px"
                />
                English</button>
        </section>


    </navbar>
}

export default LeftNav;