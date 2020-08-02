import React from 'react';


const Background = (props) => {
    const backgroundStyle = {
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundImage: `url(${props.Background})`,
    }
    return (
        <div style={backgroundStyle}></div>
    );
}

export default Background;
