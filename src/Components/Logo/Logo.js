import React from 'react';
import './Logo.scss' ;

const Logo = (props) => {
    return (
        <div className="logo d-flex justify-content-center align-items-center">
                <img alt="logo" src={props.src}/>
        </div>
    );
}

export default Logo;
