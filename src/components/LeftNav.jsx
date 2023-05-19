import { useState } from 'react'
import logo from '../images/spotify.png'


const LeftNav = () => {
    const [activeLink, setActiveLink] = useState("home");

    return <navbar className="leftNav">
        <img className='left-nav-logo'
            src={logo}
            alt="Description"
        />
        <ul>
            <li>
                <a className='nav-item' draggable="false">
                    <img
                        className='nav-item-icon'
                        draggable="false"
                        src={require('../images/ui-elements/filled-house.svg').default}
                        alt="Home"
                        width="22px"
                        height="22"
                    />
                    Home
                </a>
            </li>
            <li>
                <a className='nav-item inactive-nav-item' draggable="false">
                    <img
                        className='nav-item-icon'
                        draggable="false"
                        src={require('../images/ui-elements/search.svg').default}
                        alt="Search"
                        width="22px"
                        height="22"
                    />
                    Search
                </a>
            </li>
            <li>
                <a className='nav-item inactive-nav-item' draggable="false">
                    <img
                        className='nav-item-icon'
                        draggable="false"
                        src={require('../images/ui-elements/library-outlined.svg').default}
                        alt="Library"
                        width="22px"
                        height="22"
                    />
                    Your Library
                </a>
            </li>
        </ul>



    </navbar>
}

export default LeftNav;