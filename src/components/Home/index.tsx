import React, {useState, useEffect} from 'react';
import Image from 'next/image'

import Main from "../Main";

import { Container, MenuBar, Wrapper } from './styles';

import Footer from "../Footer";
import Marquee from "../Marquee";


const Home: React.FC = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
      const scrolled = (winScroll/height) * 100;
      setScrollTop(scrolled);

      console.log("scroll number " + scrolled)
  }

  useEffect(() => {

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, [])


  return (
    <Container >
      <MenuBar percent={scrollTop}>
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
