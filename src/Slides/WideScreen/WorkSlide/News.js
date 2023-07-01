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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: -200px;
  animation: ${fadeInAnimation} 1s ease-in-out;

  &.fade-in {
    opacity: 1;
  }
  @media ${device.mobileS} {
    padding: 10px;
    margin-top: -20px;
    margin-bottom: -20px;

  }
  @media ${device.mobileM} {
    padding: 10px;
    margin-top: -20px;
    margin-bottom: -20px;

  }

  @media ${device.tablet} {
    padding: 20px;
    margin-top: -100px;

  }

  @media ${device.laptop} {
    padding: 0px;
    margin-top: -200px;

  }

  @media ${device.desktop} {
    padding: 0px;
    margin-top: -200px;

  }
`;

const Title = styled.h1`
  font-size: 100px;
  font-family: 'AvenirHeavy';
  color: #D07131;

  @media ${device.mobileS} {
    font-size: 50px;
    margin-bottom: 0;
    margin-top: 0;
  }
  @media ${device.mobileM} {
    font-size: 50px;
    margin-bottom: 0;
    margin-top: 0;
  }

  @media ${device.tablet} {
    font-size: 80px;
    margin-bottom: 0px;
    margin-top: 0;
  }

  @media ${device.laptop} {
    font-size: 100px;
    margin-bottom: 0px;
    margin-top: 0;
  }

  @media ${device.desktop} {
    font-size: 100px;
    margin-bottom: 0px;
    margin-top: 0;
  }
`;

const NewsCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0px; /* Reducir el espacio entre el título y las tarjetas */

  @media ${device.mobileS} {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    margin-top: 20px;
  }

  @media ${device.mobileM} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }

  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }

  @media ${device.laptop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }

  @media ${device.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }
`;

const NewsCard = styled.a`
  background-color: #f0f0f0;
  padding: 20px;
  margin: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const NewsTitle = styled.h2`
  font-size: 24px;
  font-family: 'AvenirHeavy';
  color: #333;
  margin-bottom: 5px;

  @media ${device.mobileS} {
    font-size: 26px;
    margin-bottom: 6px;
  }
  @media ${device.mobileM} {
    font-size: 28px;
    margin-bottom: 6px;
  }

  @media ${device.tablet} {
    font-size: 30px;
    margin-bottom: 8px;
  }

  @media ${device.laptop} {
    font-size: 30px;
    margin-bottom: 10px;
  }

  @media ${device.desktop} {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const NewsContent = styled.div`
  font-size: 16px;
  font-family: 'AvenirBook';
  color: #666;
  margin-bottom: 10px;
  @media ${device.mobileS} {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media ${device.mobileM} {
    font-size: 16px;
    margin-bottom: 8px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media ${device.laptop} {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media ${device.desktop} {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const News = () => {
  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Container className={fadeIn ? 'fade-in' : ''}>
      <Title>Noticias</Title>
      <NewsCardContainer>
        <NewsCard href="https://uddventures.udd.cl/blog/el-aumento-de-la-demanda-del-cobre-y-la-oportunidad-para-chile" target="_blank">
          <NewsTitle>Caso Aumento de la Demanda</NewsTitle>
          <NewsContent>“El aumento de la demanda del cobre y la oportunidad para Chile”</NewsContent>
        </NewsCard>
        <NewsCard href="https://www.df.cl/empresas/mineria/escondida-en-43-dias-de-huelga-se-dejaron-de-producir-unos-us-880" target="_blank">
          <NewsTitle>Disminución de la Oferta</NewsTitle>
          <NewsContent>“Escondida: en 43 días de huelga se dejaron de producir unos US$ 880 millones”</NewsContent>
        </NewsCard>
        <NewsCard href="https://www.guiaminera.cl/cobre-sube-por-amenaza-de-interrupcion-de-suministros-en-un-chile-convulsionado/" target="_blank">
          <NewsTitle>Disminución de la Demanda</NewsTitle>
          <NewsContent>“Cobre sube por amenaza de interrupción de suministros en un Chile convulsionado.”</NewsContent>
        </NewsCard>
        <NewsCard href="https://www.bnamericas.com/es/reportajes/bajo-la-lupa-tres-megaproyectos-de-cobre-y-oro-en-construccion-en-chile" target="_blank">
          <NewsTitle>Aumento de la Oferta</NewsTitle>
          <NewsContent>“Bajo la lupa: tres megaproyectos de cobre y oro en construcción en Chile”</NewsContent>
        </NewsCard>
      </NewsCardContainer>
    </Container>
  );
};

export default News;
