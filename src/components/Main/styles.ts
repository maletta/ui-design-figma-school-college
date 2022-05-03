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

  margin-bottom: 100px;


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

    color: var(--dark-gray);
    font-family: Gotham HTF;
    font-size: min(calc(20vw),34em);
    font-weight: 900;
    letter-spacing: -0.01em;

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


export const Courses = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CoursesDetails = styled.div`
  /* margin-top: 105px; */
  width: 748px;
  padding: 100px 0;

  color: var(--white);
  font-family: Gotham HTF;

  h4 {
    font-size: 4.585em;
    font-weight: 400;
    padding-bottom: 100px;
  }

  ul{
    list-style: none;
    color: var(--light-gray);


    li {
      display: flex;
      align-items: center;
      padding: 18px 18px 18px 0;

      border-top: 1px solid var(--white);

      &:last-child {
        border-bottom: 1px solid var(--white);
      }

      & span:nth-child(1){
        font-family: PT Sans;
        padding-right: 15px;
        font-size: 1.85em;
      }

      & span:nth-child(2){
        font-size: 1.085em;
        text-transform: uppercase;
      }
    }
  }
`;

export const Panel = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;

`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 70px;
  grid-row-gap: 70px;


  padding-top: 100px;
  padding-bottom: 150px;

  div {
    position: relative;

    &::before{
      content: "";

      position: absolute;
      top: -20px;

      width: 65px;
      height: 2px;

      border-top: 2px solid var(--gray);

    }


    strong {
      display: block;

      font-family: Gotham HTF;
      font-size: 1.67em;
      font-weight: 500;
      line-height: 24px;
      color: var(--white);


    }

    span {
      display: none;

      font-family: Roboto;
      font-size: 1.334em;
      font-weight: 400;
      line-height: 19px;
      color: var(--light-gray);

      margin-top: 20px;

    }


    &.active {
      &::before{
      content: "";

      position: absolute;
      top: -20px;

      width: 100%;
      height: 2px;

      border-top: 2px solid var(--pink);
    }

      span {
        display: block;
      }

    }
  }
`;

