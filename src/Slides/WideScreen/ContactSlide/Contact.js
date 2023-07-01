import React, { Component } from 'react';
import styled from 'styled-components';
import twitterImg from '../../../Assets/Images/Social/twitter.svg';
import githubImg from '../../../Assets/Images/Social/git.svg';
import mailImg from '../../../Assets/Images/Social/mail.svg';
import instaImg from '../../../Assets/Images/Social/insta.svg';
import dribbbleImg from '../../../Assets/Images/Social/dribbble.svg';
import linkedInImg from '../../../Assets/Images/Social/linkedin.svg';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height:100vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    text-align:center;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const ContactTitle = styled.div`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  color: #D07131;
  top:12%;
  left:-70%;
  @media ${device.mobileS} {
    font-size: 50px;
  }
  @media ${device.mobileM} {
    font-size: 70px;
  }
  @media ${device.tablet} {
    font-size: 90px;
  }
  @media ${device.laptop} {
    font-size: 140px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 20%;
  z-index: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
    const minlimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= 100) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <ContactTitle scrollPercent={scrollPercent}>CONTACTO</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={githubImg} alternate="Github" redirectURL="https://github.com/unzzui" />
          <SocialLogo imgURL={mailImg} alternate="Mail" redirectURL="mailto:d.bravob@duocuc.cl,lean.navarrete@duocuc.cl,ru.godoy@duocuc.cl?subject=Consulta%20Examen%20Transversal%20Análisis%20Económico" />
          <SocialLogo imgURL={linkedInImg} alternate="Linkedin" redirectURL="https://www.linkedin.com/in/d-bravob/"  />
        </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;
