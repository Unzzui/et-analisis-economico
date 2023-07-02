import React from 'react';
import styled, { keyframes } from 'styled-components';
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
  height: 100vh;
  width: 100%;
  position: relative;
  font-family: 'AvenirRoman';
  text-align: center;
  justify-content: center;
  animation: ${fadeInAnimation} 1.5s ease-in-out;

  &.fade-in {
    opacity: 1;
  }
`;

const Button = styled.a`
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-family: 'AvenirHeavy';
  font-size: 17px;
  font-weight: bold;
  display: inline-block;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  text-decoration: none;
  color: var(--button_outline_color);
  transition: transform 0.1s ease;

  &:hover {
    /* Pull the button upwards when hovered */
    transform: translateY(-0.33em);
  }

  &:active {
    /* Push the button downwards when pressed */
    transform: translateY(0);
  }

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 2px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1.5em;
    background: var(--button_color);
    color: var(--button_outline_color);
    transform: translateY(-0.2em);
  }
`;

const Title = styled.h1`
  font-size: 70px;
  font-family: 'AvenirHeavy';

  @media ${device.mobileM} {
    font-size: 50px;

  }

  @media ${device.tablet} {
    font-size: 60px;

  }

  @media ${device.laptop} {
    font-size: 70px;

  }

  @media ${device.desktop} {
    font-size: 70px;
 
  }
`;

const Paragraph = styled.div`
  font-size: 30px;
  font-family: 'AvenirBook';
  margin-bottom: 30px;
  font-family: 'AvenirBook';


  @media ${device.mobileM} {
    font-size: 18px;

  }

  @media ${device.tablet} {
    font-size: 20px;

  }

  @media ${device.laptop} {
    font-size: 30px;

  }

  @media ${device.desktop} {
    font-size: 30px;

  }
`;

const MyButton = () => {
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Container className={fadeIn ? 'fade-in' : ''}>
      <Title>Descargar Informe en PDF</Title>
      <Paragraph>
         Haz clic en el botón "Descargar" para obtener el informe completo en formato PDF. <br></br>
        Para continuar explorando la página, simplemente desliza hacia abajo o realiza scroll.
      </Paragraph>
      <Button
        href={require('../../../Assets/Data/Analisis_Economico_ET_Final.pdf')}
        download
      >
        <div className="button_top">Descargar</div>
      </Button>
    </Container>
  );
};

export default MyButton;
