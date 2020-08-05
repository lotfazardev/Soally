import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Questions = ({ match, Questions }) => {
    const history = useHistory();
    const [item, setItem] = useState({ options: [] })
    const [end, setEnd] = useState(false)
    const [ans, setAns] = useState({})

    let id = +match.params.id - 1;

    useEffect(() => {
        if (Questions && id < Questions.length) {
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
        <div>
            {
                end ?
                    <>
                        <h1>the end</h1>
                    </>
                    :
                    <>
                        <h1>{item.text}</h1>
                        {
                            item.options.map((current, index) => {
                                return (
                                    <Button onClick={() => handelClick(item.id, current.key)} key={current.key}>
                                        {current.text}
                                    </Button>
                                );
                            })
                        }
                    </>
            }

        </div>
    );
}


export default Questions;