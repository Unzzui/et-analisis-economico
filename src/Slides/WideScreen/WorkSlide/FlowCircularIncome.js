import React from 'react';
import styled, { keyframes } from 'styled-components';
import svgImage from '../../../Assets/Images/flujo.svg';
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin-top: -100px;
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
  font-size: 100px;
  margin-bottom: 20px;
  margin-top: -80px;
  color: #d07131;

  @media ${device.mobileS} {
    font-size: 40px;
  }

  @media ${device.mobileM} {
    font-size: 40px;
  }

  @media ${device.tablet} {
    font-size: 100px;
  }

  @media ${device.laptopL} {
    font-size: 100px;
  }
`;

const Explanation = styled.div`
  font-size: 30px;
  text-align: left;
  line-height: 1.5;

  @media ${device.mobileS} {
    font-size: 16px;
  }

  @media ${device.mobileM} {
    font-size: 16px;
  }

  @media ${device.tablet} {
    font-size: 25px;
  }

  @media ${device.laptopL} {
    font-size: 30px;
  }
`;

const SVGObject = styled.object`
  width: 1200px;
    
  @media ${device.mobileS} {
    width: 300px;
  }
  @media ${device.mobileM} {
    width: 300px;
  }
  @media ${device.tablet} {
    width: 1000px;
  }
  @media ${device.laptopL} {
    width: 1200px;
  }


`;

const FlowCircularIncome = () => {
  const svgSource = svgImage;

  return (
    <Container>
      <Title>Flujo Circular de la Renta</Title>
      <SVGObject type="image/svg+xml" data={svgSource}>
        Tu navegador no admite SVG
      </SVGObject>
      <Explanation>
        <p>Explicación del diagrama:</p>
        <ul>
          <li>Las Familias reciben salarios y rentas de las Empresas.</li>
          <li>Las Empresas pagan impuestos y regalías al Estado.</li>
          <li>Las Empresas también exportan productos al Sector Externo.</li>
          <li>El Estado proporciona servicios y subsidios a las Familias.</li>
          <li>El Sector Externo importa productos de las Empresas.</li>
          <li>Las Familias pagan impuestos al Estado.</li>
          <li>El Estado realiza inversiones y comercio con el Sector Externo.</li>
        </ul>
      </Explanation>
    </Container>
  );
};

export default FlowCircularIncome;
