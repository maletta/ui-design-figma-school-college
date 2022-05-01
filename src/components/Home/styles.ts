import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: var(--black);

`;

interface MenuBarProp {
  percent: number;
}

export const MenuBar=  styled.div<MenuBarProp>`
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
  width: 100%; /* ver laterais */
  height: 100%;
  padding: 0 222px 0 222px;

  @media (max-width: 1600px) {
    padding: 0 0;
  }
`;
