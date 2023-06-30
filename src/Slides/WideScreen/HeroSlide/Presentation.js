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
  font-family: 'AvenirRoman';
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${fadeInAnimation} 1s ease-in-out;

  &.fade-in {
    opacity: 1;
  }
  
  @media ${device.mobileM} {
    padding: 10px;
  }
  
  @media ${device.tablet} {
    padding: 20px;
  }
  
  @media ${device.laptop} {
    padding: 0px;
  }
  
  @media ${device.desktop} {
    padding: 0px;
  }
`;

const Title = styled.h1`
  font-size: 300px;
  font-family: 'AvenirHeavy';
  color: #D07131;
  margin-bottom: 600px;

  @media ${device.mobileM} {
    font-size: 100px;
    margin-bottom: 0;
    margin-top: 0;
  }

  @media ${device.tablet} {
    font-size: 200px;
    margin-bottom: 0px;
    margin-top: 0;
  }

  @media ${device.laptop} {
    font-size: 250px;
    margin-bottom: 0px;
    margin-top: 0;
  }

  @media ${device.desktop} {
    font-size: 300px;
    margin-bottom: 0px;
    margin-top: 0;
  }
`;

const Paragraph = styled.div`
  font-size: 30px;
  font-family: 'AvenirBook';
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 200px;
  text-align: center;

  @media ${device.mobileM} {
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 100px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 100px;
  }

  @media ${device.laptop} {
    font-size: 30px;
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 200px;
  }

  @media ${device.desktop} {
    font-size: 40px;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 300px;
  }
`;
const Presentation = () => {
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Container className={fadeIn ? 'fade-in' : ''}>
      <Title>Intro</Title>
      <Paragraph>
        Esta página web presenta una síntesis del Examen Transversal de Análisis Económico en la industria minera de Chile. Con el respaldo de los conocimientos adquiridos en el curso de análisis económico impartido por Duoc UC, se exploran los fundamentos de la economía como ciencia social, se analizan los datos macroeconómicos relevantes y se examina el funcionamiento del mercado en el contexto específico de la industria minera. A través de esta plataforma, usted podrá comprender de manera precisa y práctica los aspectos más cruciales del informe.
      </Paragraph>
    </Container>
  );
};

export default Presentation;
