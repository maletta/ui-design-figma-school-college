import React from 'react';

import { Container, Banner,  Courses,
  CoursesDetails, Cards, } from './styles';


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
        <Title  title="Cursos" subtitle={"Cursos de Curta Duração"}/>

        <Tab options={["Tecnologia", "Inovação", "Negócios"]} selected={"Tecnologia"}/>
      </Courses>

      <CoursesDetails>
        <h4>Tecnologia</h4>

        <ul>
          <li>
            <span>Big Data Ecosystem</span>
            <span>remoto • live</span>
          </li>
          <li>
            <span>Creating Dashboards for BI</span>
            <span>remoto • live</span>
          </li>
          <li>
            <span>Big Data Science - Machine Learning & Data Mining</span>
            <span>remoto • live + multimídia</span>
          </li>
          <li>
            <span>Storytelling</span>
            <span>remoto • live</span>
          </li>
        </ul>
      </CoursesDetails>

      <Title title={"FAQ"} subtitle='Dúvidas Frequentes' />

      <Cards>
        <div>
          <strong>
          QUANDO POSSO ME MATRICULAR?
          </strong>

          <span> LORE IPSUM </span>
        </div>

        <div className='active'>
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

    </Container>
  )
}

export default Main;
