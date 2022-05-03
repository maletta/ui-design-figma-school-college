import React from 'react';
import Image from 'next/image'

import Main from "../Main";

import { Container, MenuBar, Wrapper } from './styles';

import Footer from "../Footer";
import Marquee from "../Marquee";


const Home: React.FC = () => {
  return (
    <Container>
      <MenuBar percent={10}>
        <Image src={"/svgs/logo-fiap.svg"} alt="logotipo FIAP" width="64" height="64" />
      </MenuBar>
      <Wrapper>
        <Main />
      </Wrapper>

      <Marquee direction={"slide-left"} text={"CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO."}/>
      <Marquee direction={"slide-right"} text={"TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO."}/>

    <Wrapper>
      <Footer />
    </Wrapper>

    </Container>
  )
}

export default Home;
