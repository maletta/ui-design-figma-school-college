import React from 'react';
import Image from 'next/image'

import Main from "../Main";

import { Container, MenuBar, Wrapper } from './styles';



const Home: React.FC = () => {
  return (
    <Container>
      <MenuBar>
        <Image src={"/svgs/logo-fiap.svg"} alt="logotipo FIAP" width="64" height="64" />
      </MenuBar>
      <Wrapper>
        <Main />
      </Wrapper>
    </Container>
  )
}

export default Home;
