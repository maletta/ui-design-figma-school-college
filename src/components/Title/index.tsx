import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  subtitle: string;
}

const Title: React.FC<Props> = ({title, subtitle}) => {
  return <Container>
    <h3>{title}</h3>
    <span>{subtitle}</span>
  </Container>;
}

export default Title;
