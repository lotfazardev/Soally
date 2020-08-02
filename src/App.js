import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Background from './Components/Background/Background';
import './App.scss'

function App() {
  const [Data, SetData] = useState({})

  useEffect(() => {
    SetData({
      organization_name: "Docker",
      organization_name_fa: "داکر",
      intro: "فرم نظر سنجی و ارتقا سطح خدمت رسانی",
      logo_url: {
        Horizontal: "https://www.docker.com/sites/default/files/d8/2019-07/horizontal-logo-monochromatic-white.png",
        Vertical: "https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/vertical-logo-monochromatic.png"
      },
      background_url: `https://picsum.photos/${window.innerWidth}/${window.innerHeight}/?blur=10`
    })
  }, []);

  return (
    <Container id="main" fluid={true}>
      <Background Background={Data.background_url} />
    </Container>
  );
}

export default App;
