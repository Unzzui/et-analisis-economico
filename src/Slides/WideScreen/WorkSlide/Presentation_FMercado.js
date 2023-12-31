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
  font-size: 250px;
  font-family: 'AvenirHeavy';
  color: #D07131;
  margin-bottom: 600px;

  @media ${device.mobileM} {
    font-size: 50px;
    margin-bottom: 0;
    margin-top: 0;
  }

  @media ${device.tablet} {
    font-size: 100px;
    margin-bottom: 0px;
    margin-top: 0;
  }

  @media ${device.laptop} {
    font-size: 150px;
    margin-bottom: 0px;
    margin-top: 0;
  }

  @media ${device.desktop} {
    font-size: 150px;
    margin-bottom: 0px;
    margin-top: 0;
  }
`;

const Paragraph = styled.div`
  font-size: 30px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 200px;
  text-align: center;
  font-family: 'AvenirBook';


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

const FMercado = () => {
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Container className={fadeIn ? 'fade-in' : ''}>
      <Title>Funcionamiento del mercado</Title>
      <Paragraph>
      En esta sección, exploraremos el funcionamiento del mercado de la industria minera y examinaremos los cambios en la oferta y la demanda. Acompañaremos nuestra investigación con un gráfico hipotético que ilustrara escenarios de aumento de la demanda, disminución de la oferta, disminución de la demanda y aumento de la oferta. Además, proporcionaremos enlaces a noticias reales que ejemplifican estos casos y muestran cómo situaciones reales han afectado al mercado minero. Estos ejemplos concretos brindarán una visión más completa de los impactos y las implicaciones de los cambios en la oferta y la demanda en este sector estratégico.
      
        </Paragraph>

    </Container>
  );
};

export default FMercado;
