import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  height: 100%;


  position: relative;
`;
export const Banner = styled.div`
  position: relative;

  display: flex;
  align-items: center;


  height: 720px;
  width: 100%;


  color: var(--white);

  > div {
    position: relative;

    @media (max-width: 1600px) {
      display: flex;
      justify-content: center;
    }
  }

  > div p:nth-child(1) {
    z-index: 999;
    position: relative;

    color: var(--white);
    /* font-size: 9rem; */
    font-size: min(calc(6vw),9em);
    font-weight: 500;
    text-transform: uppercase;
    text-indent: 5rem;

    @media (max-width: 1600px) {
      text-align: center;
      }
    }

  > div p:nth-child(2) {
    z-index: 0;

    position: absolute;

    color: var(--gray);
    font-family: Gotham HTF;
    font-size: min(calc(20vw),34em);
    font-weight: 900;

    width: 100px;
    height: 100px;
    display: flex;

    width: auto;
    height: auto;

    top: 0.1em;

    @media (max-width: 1600px) {
      top: 0.26em;
    }

  }

`;


export const Courses = styled.div``;
export const Panel = styled.div``;
export const Cards = styled.div``;

