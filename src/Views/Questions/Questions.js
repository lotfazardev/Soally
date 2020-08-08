import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import Stepper from 'react-stepper-horizontal';
import './Questions.scss'

const Questions = ({ match, Questions }) => {
    const history = useHistory();
    const [item, setItem] = useState({ options: [] })
    const [end, setEnd] = useState(false)
    const [ans, setAns] = useState({})
    const [steps, setStep] = useState([])

    let id = +match.params.id - 1;

    useEffect(() => {
        if (Questions) {
            let tmp = []
            for (let i = 0; i < Questions.length; i++) {
                tmp.push({ "title": '' })
            }
            setStep(tmp)
        }
    }, [])

    useEffect(() => {
        if (Questions && id < Questions.length) {
            setEnd(false)
            setItem(Questions[id])
        } else if (Questions && id == Questions.length) {
            console.log(Object.keys(ans).map((key) => ans[key]))
            setEnd(true)
        } else {
            history.push(``)
        }
    }, [history.location.pathname])

    const handelNext = () => {
        history.push(`${+match.params.id + 1}`)
    }

    const handelClick = (id, answer) => {
        setAns({ ...ans, [+match.params.id]: { id, answer } })
        handelNext();
    }

    return (
        <Row id="questions-row" className="d-flex flex-column align-items-center justify-content-between ">
            <Col id="stepper"
                xs={12} sm={12} md={10} lg={8}>
                <Stepper defaultBarColor={"transparent"}
                    activeColor={"#f08a5d"}
                    completeColor={"#f08a5d"}
                    completeBarColor={"#b83b5e"}
                    defaultColor={"#d8d8d8"}
                    size={20}
                    circleFontSize={0}
                    steps={steps}
                    activeStep={id} />
            </Col>
            {
                end ?
                    <Col xs={12} sm={12} md={10} lg={8}>
                        <h1>با تشکر از وقتی که صرف پاسخگویی به سوالات کردید.</h1>
                    </Col>
                    :
                    <>
                        <Col xs={12} sm={12} md={10} lg={8}>
                            <h1>{item.text}</h1>
                        </Col>
                        <Col xs={12} sm={12} md={10} lg={8}>
                            {
                                item.options.map((current, index) => {
                                    return (
                                        <Button onClick={() => handelClick(item.id, current.key)} key={current.key}>
                                            {current.text}
                                        </Button>
                                    );
                                })
                            }
                        </Col>
                    </>
            }

        </Row>
    );
}


export default Questions;