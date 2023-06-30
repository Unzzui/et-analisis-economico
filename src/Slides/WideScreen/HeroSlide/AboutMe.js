/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.div`
    height: 100vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
`;


const AboutMeTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 5.5}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  position: absolute;
  opacity: 0.5;
  color: #CB6D51;
  top:10%;
  left:0%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const AboutMeTitle2 = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 6}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  position: absolute;
  color: #CB6D51;
  opacity: 0.5;
  top:10%;
  left:-20%;
  @media ${device.laptop} {
    font-size: 80px;
  }
  @media ${device.laptopL} {
    font-size: 150px;
  }
  @media ${device.desktop} {
    font-size: 250px;
  }
`;

const AboutMeDescription = styled.div`
  align-items: center;
  text-align: center;
  position: absolute;
  top:20%;
  @media ${device.laptop} {
    transform: translateY(90%);
    font-size: 30px;
  }
  @media ${device.laptopL} {
    transform: translateY(87%);
    font-size: 38px;
  }
  @media ${device.desktop} {
    transform: translateY(80%);
    font-size: 70px;
  }
`;

const AboutMeDescription2 = styled.div`
  align-items: center;
  text-align: center;
  position: absolute;

  @media ${device.laptop} {
    transform: translateY(90%);
    font-size: 30px;
  }
  @media ${device.laptopL} {
    transform: translateY(87%);
    font-size: 38px;
  }
  @media ${device.desktop} {
    transform: translateY(80%);
    font-size: 70px;
  }
`;
class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <div>
        <Container>
          <AboutMeTitle scrollPercent={scrollPercent}>INTRO</AboutMeTitle>
          <AboutMeDescription>
          Esta página web contiene una síntesis del Examen Transversal de Análisis Económico en la industria minera de Chile. Explora la economía como ciencia social, datos macroeconómicos y funcionamiento del mercado. Aprenda a comprender de manera precisa y útil los aspectos más cruciales del informe. 
          </AboutMeDescription>
        </Container>
        <Container>
          <AboutMeTitle2 scrollPercent={scrollPercent}>Industria Minera</AboutMeTitle2>
          <AboutMeDescription2>
          La industria minera en Chile es reconocida como un pilar fundamental en el desarrollo
           económico del país. Chile es uno de los principales productores y exportadores de minerales a nivel mundial, 
           centrándose principalmente en la extracción de cobre, pero también abarcando otros minerales como el litio, el oro y el molibdeno. Esta industria genera empleo, contribuye al Producto Interno Bruto y promueve el desarrollo de infraestructuras y servicios relacionados. Sin embargo, también enfrenta desafíos en términos de sostenibilidad ambiental y social.
          </AboutMeDescription2>
       
        </Container>
      </div>
    );
  }
}


export default AboutMe;
