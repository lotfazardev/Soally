import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import Background from './Components/Background/Background';
import Start from './Views/Start/Start';
import './App.scss';
import SoallyTag from './Components/SoallyTag/SoallyTag';
import Questions from './Views/Questions/Questions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  const [Data, SetData] = useState({})
  const [Level, SetLevel] = useState(0)
  useEffect(() => {
    SetData({
      organization_name: "Docker",
      organization_name_fa: "داکر",
      intro: "فرم نظر سنجی و ارتقا سطح خدمت رسانی",
      logo_url: "https://www.docker.com/sites/default/files/d8/2019-07/horizontal-logo-monochromatic-white.png",
      background_url: `https://picsum.photos/${window.innerWidth}/${window.innerHeight}/?blur=10`,
      questions: [
        {
          id: "k23e2",
          text: "آیا از خدمات راضی هستید ؟",
          options: [
            { key: 1, text: "عالیه" },
            { key: 2, text: "خوبه" },
            { key: 3, text: "ضعیفه" },
          ]
        },
        {
          id: "k23e3",
          text: "آیا پروسه دواپس برای شما راحت تر شده ؟",
          options: [
            { key: 1, text: "بله" },
            { key: 2, text: "تقریبا" },
            { key: 3, text: "اصلا" },
          ]
        },
        {
          id: "k23e4",
          text: "آیا به رشد زیست بوم استارتاپ شما کمکی کرده ؟",
          options: [
            { key: 1, text: "خیلی" },
            { key: 2, text: "تقریبا" },
            { key: 3, text: "نه" },
          ]
        },
        {
          id: "k23e5",
          text: "آیا از رشد داکر در این چند سال راضی بودید ؟",
          options: [
            { key: 1, text: "بله" },
            { key: 2, text: "تقریبا" },
            { key: 3, text: "افتضاحه" },
          ]
        },
        {
          id: "k23e5",
          text: "آیا حضرت یونس میداند از نهنگش بار میکشیم ؟",
          options: [
            { key: 1, text: "بله" },
            { key: 2, text: "شاید" },
            { key: 3, text: "اصلا" },
          ]
        },
      ]
    })
  }, []);

  return (
    <Router>
      <Container id="main" fluid={true}>
        <Background Background={Data.background_url} />
        <Switch>
          <Route exact path="/">
            <Row
              id="row"
              className='d-flex flex-column justify-content-center align-items-center'>
              <Start Intro={Data.intro} Logo={Data.logo_url} SetLevel={SetLevel} />
            </Row>
            <Row id='footer' className="d-flex justify-content-center align-items-end pb-3">
              <SoallyTag />
            </Row>
          </Route>
          <Route path="/:id"
            render={props => (
              <Questions {...props} Data={Data} />
            )} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
