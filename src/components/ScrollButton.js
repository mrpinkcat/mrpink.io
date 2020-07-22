import React from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  pointer-events: none;

  position: fixed;
  bottom: 15px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  pointer-events: auto;
  border: 2px solid white;
  border-radius: 5px;
  display: flex;
  background: none;
  padding: 8px 30px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all ease .2s;

  &:hover {
    background: white;
    color: #111;
    transition: all ease .2s;
  }
`;

const ScrollButton = (props) => {
  return (
    <BackgroundDiv>
      <Button onClick={props.onClick}>
        {props.text}
      </Button>
    </BackgroundDiv>
  )
}

export default ScrollButton;
