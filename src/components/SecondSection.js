import React from 'react';
import styled from 'styled-components';

import Text from './../components/base-components/Text';

import ImageFile from './../assets/start.jpeg';

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;

const TopContainer = styled.div`
  width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  @media only screen and (max-width: 420px) {
    flex-direction: column;
    width: 70%;
  }
`;

const MainContainer = styled.div`

`;

const TitleContainer = styled.div`

`;

const Title = styled.h1`
  margin-bottom: 0px;

  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  @media only screen and (max-width: 420px) {
    margin-top: 6px;
    text-align: center;
  }
`;

const Image = styled.img`
  height: 180px;
  border-radius: 5px;

  @media only screen and (max-width: 420px) {
    height: 130px;
  }
`;

const SecondSection = (props) => {
  const fullpageApi = props.fullpageApi;

  return (
    <div className='section' >
      <SectionContainer>
        <TopContainer>
          <Image src={ImageFile} />
          <TitleContainer>
            <Title>Le commencement</Title>
            <Subtitle>Quand et pourquoi as-tu commencé à coder ?</Subtitle>
          </TitleContainer>
        </TopContainer>
        <MainContainer>
          <Text>
            J'ai commencé à coder en <b>2014</b>. Je faisais partie d'une classe de seconde numérique, chaque personne travaillait sur son poste.
          </Text>
        </MainContainer>
      </SectionContainer>
    </div>
  )
}

export default SecondSection;
