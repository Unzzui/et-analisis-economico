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

const Eciencia = () => {
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Container className={fadeIn ? 'fade-in' : ''}>
      <Title>Economía como ciencia social</Title>
      <Paragraph>
      La Economía como ciencia social estudia la producción, distribución y consumo de bienes y servicios en una sociedad. En la economía chilena, el flujo circular de la renta representa los intercambios entre familias, empresas, Estado y sector externo. Tres escenarios que podrían afectar este flujo son: disminución del consumo familiar, aumento en la contratación de trabajadores por parte de las empresas y aumento de impuestos estatales. Estos escenarios tendrían efectos en la economía y en la industria minera, que desempeña un papel fundamental en la economía chilena.
      
        </Paragraph>

    </Container>
  );
};

export default Eciencia;
