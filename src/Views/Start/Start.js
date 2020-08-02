import React from 'react';
import { Col, Button } from 'reactstrap';
import './Start.scss'

const Start = (props) => {
    return (
        <>
            <Col
                className="Start-Col"
                xs={12} sm={12} md={10} lg={8}>
                <h1>{props.Intro}</h1>
                <img className='mt-2' src={props.Logo} />
            </Col>
            <Col
                className="Start-Col mt-5"
                xs={12} sm={12} md={10} lg={8}>
                <button>
                    شروع
                </button>
            </Col>
        </>
    );
}

export default Start;
