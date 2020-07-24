import React from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div`
  pointer-events: none;

  position: fixed;
  bottom: 8px;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  pointer-events: auto;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  background: none;
  padding: 6px 15px;
  color: white;
  font-weight: bold;
  font-size: 12px;
`;

const SwipeHint = (props) => {
  return (
    <BackgroundDiv>
      <Text onClick={props.onClick}>
        {props.text}
      </Text>
    </BackgroundDiv>
  )
}

export default SwipeHint;
