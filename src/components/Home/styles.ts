import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;

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

  position: fixed;
  z-index: 9999;

  width: 100%;
  height: 80px;

  background-color: var(--gray);

  &::before{
    content: '';

    position: absolute;
    bottom: -2px;

    width: 100%;
    height: 2px;

    background-image: ${({percent}) => `linear-gradient(to right, var(--pink) ${percent}%,  transparent 0%)`};
  }
`;

export const Wrapper = styled.div`
  width: 100%; /* ver laterais */
  height: 100%;
  padding: 0 222px 0 222px;
  /* padding: 0 100px 0 100px; */


`;
