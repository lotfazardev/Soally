import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import Background from './Components/Background/Background';
import Start from './Views/Start/Start';
import './App.scss'

function App() {
  const [Data, SetData] = useState({})

  useEffect(() => {
    SetData({
      organization_name: "Docker",
      organization_name_fa: "داکر",
      intro: "فرم نظر سنجی و ارتقا سطح خدمت رسانی",
      "logo_url": "https://www.docker.com/sites/default/files/d8/2019-07/horizontal-logo-monochromatic-white.png",
      background_url: `https://picsum.photos/${window.innerWidth}/${window.innerHeight}/?blur=10`
    })
  }, []);

  return (
    <Container id="main" fluid={true}>
      <Background Background={Data.background_url} />
      <Row
        id="row"
        className='d-flex flex-column justify-content-center align-items-center'>
        <Start Intro={Data.intro} Logo={Data.logo_url} />

      </Row>
    </Container>
  );
}

export default App;
