import React from 'react';

import { Container, Cards } from './styles';

const Footer: React.FC = () => {
  return <Container>
    <p>Formatos</p>

    <Cards>
      <div>
        <strong>LIVE</strong>
        <span>Suas aulas são encontros online sempre ao vivo. Isso significa que em todas as etapas do curso, as aulas serão em tempo real. </span>
      </div>

      <div>
        <strong>DIGITAL</strong>
        <span>Suas aulas são vídeos, podcasts, páginas HTML e PDFs que você pode acessar quando quiser. </span>
      </div>

      <div>
        <strong>live + <br/> digital</strong>
        <span>Este formato combina aulas online ao vivo com aulas e conteúdos multimídia. Você aproveita partes essenciais do seu curso em contato direto com os professores
e colegas, nos encontros online ao vivo.</span>
      </div>

      <div>
        <strong>PRESENCIAL</strong>
        <span>Suas aulas são sempre encontros presenciais nos espaços FIAP. Para quem valoriza a presença física e todos os detalhes de uma sala de aula, este é o formato
indicado. </span>
      </div>
    </Cards>

  </Container>
}

export default Footer;
