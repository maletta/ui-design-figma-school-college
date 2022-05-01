import React from 'react';

import { Container, Banner,  Courses, Panel, Cards, } from './styles';


import Title from "../Title";
import Tab from "../Tab";

const Main: React.FC = () => {
  return (
    <Container>
      <Banner>

        <div>
        <p>
        A Melhor Faculdade de Tecnologia
        </p>
        <p>
        SOBRE
        </p>
        </div>

      </Banner>

      <Courses>
        <Title  title="Cursos" subtitle={"Cursos de curta duração"}/>

        <Tab options={["Tecnologia", "Inovação", "Negócios"]}/>
      </Courses>

      <Panel />

      {/* <FAQ>

      <Cards>
        <div>
          <strong>
          QUANDO POSSO ME MATRICULAR?
          </strong>

          <span> LORE IPSUM </span>
        </div>

        <div>
          <strong>
          POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?
          </strong>

          <span>Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.</span>
        </div>

        <div>
          <strong>
          QUAIS OS PRÉ-REQUISITOS?
          </strong>

          <span>LORE IPSIM</span>
        </div>

        <div>
          <strong>
          QUAL A DURAÇÃO DOS CURSOS?
          </strong>

          <span>LORE IPSIUM</span>
        </div>

        <div>
          <strong>
          PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?
          </strong>

          <span>LORE IPSIUM</span>
        </div>

        <div>
          <strong>
          VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?
          </strong>

          <span>LORE IPSIUM</span>
        </div>
      </Cards>

      <Marquee direction={"right"} text={"CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO."}/>
      <Marquee direction={"left"} text={"TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO."}/>


    <Footer /> */}


    </Container>
  )
}

export default Main;
