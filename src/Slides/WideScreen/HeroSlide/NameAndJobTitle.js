import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';
import LogoDuoc from '../../../Assets/Images/logo.png'
import device from '../../../Assets/Responsive/breakpoints';


const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;



const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: white;
`;

const Logo = styled.img`
  width: 400px;
  height: 100px;
  margin-bottom: 20px;
  animation: ${fadeInAnimation} 1.5s ease-in-out;

  &.fade-in {
    opacity: 1;
  }
  @media ${device.mobileS}{
    width: 250px;
    height: 70px;
  }
  @media ${device.mobileM}{
    width: 250px;
    height: 70px;
  }

  @media ${device.laptopL}{
    width: 400px;
    height: 100px;
  }
  @media ${device.laptop}{
    width: 400px;
    height: 100px;
  }
  @media ${device.desktop}{
    width: 400px;
    height: 100px;
  }
`;


class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <Logo src={LogoDuoc} alt="Logo" />
        <NameReveal text="Industria Minera" fontFam="AvenirRoman" timeDelay={500} />
        <br />
        <TitleReveal text="Leandro Navarree" fontFam="AvenirRoman" timeDelay={1000} />
        <TitleReveal text="Ruben Godoy" fontFam="AvenirRoman" timeDelay={1500} />
        <TitleReveal text="Diego Bravo" fontFam="AvenirRoman" timeDelay={2000} />
      </Container>
    );
  }
}

export default NameAndJobTitle;
