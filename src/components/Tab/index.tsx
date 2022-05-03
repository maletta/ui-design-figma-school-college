import React from 'react';

import { Container, } from './styles';

interface Props {
  options: string[];
  selected : string;
}

const Tab: React.FC<Props> = ({options, selected}) => {
  return <Container>
    <ul>
      {options.map((item) =>
      <li
      key={item}
      className={item === selected ? "active" : ""}>
        {item}
      </li>)}
    </ul>
  </Container>;
}

export default Tab;
