import React from 'react';

const Song = ( {title, artist} ) => {
    return (
    <li>
        <h4>{title}</h4>
        <h5>{artist}</h5>
    </li>
    )
}

export default Song