import styled from 'styled-components';

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

export default Text;
