import React, { Component } from 'react';
import styled from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height:100vh;
    width:100%;
    background-color: white;
    /* border: 1px solid blue; */
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
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
