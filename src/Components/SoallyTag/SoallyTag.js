import React from 'react';
import './SoallyTag.scss'

const SoallyTag = () => {
    return (
        <div id="footer-tag" className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
                <span id="footer-app-name-intro">قدرت گرفته از</span>
                <span id="footer-app-name" className="mr-3">soally</span>
            </div>
            <span id="footer-des">
                پلتفرم طراحی فرم های CRM آنلاین
            </span>
        </div>
    );
}

export default SoallyTag;
