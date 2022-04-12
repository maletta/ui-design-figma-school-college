import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  height: 100%;


  position: relative;
`;
export const Banner = styled.div`
  height: 509px;

  position: relative;

  color: var(--white);

  > p::nth-child(1) {
    z-index: 2;

    position: absolute;
    margin: 308px auto 0 auto;

    color: var(--gray);
    font-family: Gotham HTF;
    font-size: 350px;
    font-weight: 900;

  }

  > p::nth-child(2) {
    z-index: 3;

    position: absolute;
    margin: 308px auto 0 auto;

    color: var(--white);
    font-size: 110px;
    font-weight: 500;
    text-transform: uppercase;

  }

`;


export const Courses = styled.div``;
export const Panel = styled.div``;
export const Cards = styled.div``;

