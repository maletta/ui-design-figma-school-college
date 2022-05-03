import React from 'react';

import { Container } from './styles';

interface Props {
  text: string;
  direction: string;
}


const Marquee: React.FC<Props> = ({text, direction}) => {
  return <Container direction={direction}>
    <p>
    {text}
    </p>
  </Container>
}

export default Marquee;
