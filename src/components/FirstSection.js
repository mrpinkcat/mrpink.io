import React from 'react';
import styled from 'styled-components';
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

import meImage from './../assets/me.jpg';

import GithubLogo from './../components/svgs/GithubLogo';
import LinkedInLogo from './../components/svgs/LinkedInLogo';
import MailLogo from './../components/svgs/MailLogo';
import ScrollButton  from './../components/ScrollButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 15px 0;
  color: #FFF;
  text-align: center;
  width: fit-content;
`;

const Text = styled.p`
  color: #FFF;
  opacity: .8;
  font-weight: 500;
  width: 700px;
  display: block;
  text-align: center;
  font-size: 20px;
  box-sizing: border-box;

  @media only screen and (max-width: 740px) {
    width: calc(100% - 40px);
    font-size: 18px;
  }
`;

const Image = styled.img`
  height: 250px;
  border-radius: 5px;

  @media only screen and (max-width: 420px) {
    width: 70%;
    height: auto;
  }
`;

const CustomLink = styled.a`
  color: #FFF;
`;

const SocialLinkContainer = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  margin: 0 8px;
`;

const FirstSection = (props) => {
  const fullpageApi = props.fullpageApi;

  return (
    <div className="section">
      <Container>
        <Title>Gatien Anizan</Title>
          <Image src={meImage} alt="Me" />
          <Text>Je suis Gatien, un développeur passionné par les technologies. Je cultive un esprit curieux en le remplissant de problème chaque jour. Je suis fièrement diplômé d'un BTS SIO. Mes deux ans de formation d'apprenti ont été faites au sein de l'équipe <CustomLink href="https://kwalys.com" target="_blank" rel="noopener noreferrer">Kwalys</CustomLink>, startup de création de chatbot.</Text>
          <SocialLinkContainer>
            <SocialLink href="https://github.com/mrpinkcat" target="_blank" rel="noopener noreferrer" ><GithubLogo color="#FFF" size="30px" /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/anizan-g/" target="_blank" rel="noopener noreferrer" ><LinkedInLogo color="#FFF" size="30px" /></SocialLink>
            <SocialLink href="mailto://gatien.anizan@gmail.com"><MailLogo color="#FFF" size="30px" /></SocialLink>
          </SocialLinkContainer>
      </Container>
      <BrowserView>
        <ScrollButton onClick={(e) => {fullpageApi.moveSectionDown()}} text="Prochaine partie" />
      </BrowserView>
      <MobileView>
        <h1>small screen</h1>
      </MobileView>
    </div>
  )
}

export default FirstSection;
