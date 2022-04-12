import styled from "styled-components";

export const Container = styled.div`
  width: 1920px;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: var(--black);

`;

interface MenuBarProp {
  percent: number;
}

export const MenuBar = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 80px;

  background-color: var(--gray);

  position: relative;

  &::before{
    content: '';

    position: absolute;
    bottom: 0;

    width: 100%;
    height: 2px;
    background-image: linear-gradient(to right, var(--pink) 20%, transparent);

  }
`;

export const Wrapper = styled.div`
  width: calc(1920px); /* ver laterais */
  height: 100%;
  padding: 0 222px 0 222px;

`;
