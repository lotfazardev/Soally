import React from 'react';
import { Col, Button } from 'reactstrap';

import './Start.scss';
import { useHistory } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';

const Start = (props) => {
    const history = useHistory();
    
    const handelButton = () => {
        history.push('/1')
    }

    return (
        <>
            <Col
                className="Start-Col"
                xs={12} sm={12} md={10} lg={8}>
                <h1>{props.Intro}</h1>
                <Logo src={props.Logo}/>
            </Col>
            <Col
                className="Start-Col mt-5"
                xs={12} sm={12} md={10} lg={8}>
                <button onClick={handelButton}>
                    شروع
                </button>
            </Col>
        </>
    );
}

export default Start;
