import React from 'react';
import styled from 'styled-components';
import meImage from './assets/me.png';

// Définie les règles CSS de la dic principale avec styled-components
const MainDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  margin: 15px 0;
  color: #FFF;
  text-shadow: 0px 0px 2px rgba(10, 255, 10, .8);
  text-align: center;
`;

const Image = styled.img`
  height: 200px;
`;

function App() {
  return (
    <MainDiv>
      <Title>MrPink.dev</Title>
      <Image src={meImage} alt="Me" />
    </MainDiv>
  );
}

export default App;
