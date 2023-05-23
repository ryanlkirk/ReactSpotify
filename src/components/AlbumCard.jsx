import React, { useState } from 'react';

const AlbumCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="albumCard"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div className='album'>

                <div className={`playBtn ${isHovered ? '' : 'hide'}`}>
                    <img
                        draggable="false"
                        src={require('../images/ui-elements/play-dark.svg').default}
                        alt="play"
                        width="22px"
                        height="22px"
                    />
                </div>
            </div>
            <p>Peaceful Piano</p>
            <p className="info">Peaceful piano to help you slow down...</p>
        </div>
    );
};

export default AlbumCard;
