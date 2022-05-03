import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 100px 0 200px 125px;

  p {
    position: relative;

    display: block;
    padding: 40px;

    font-family: Gotham HTF;
    font-size: 1.5em;
    font-weight: 500;
    color: var(--pink);

    &::before {
      content: "";
      height: 15px;
      width: 15px;

      background-color: var(--pink);

      position: absolute;
      top: calc(50% - 7.5px);
      left: 0;
    }
  }

`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  padding-left: 50px;

    div {
      display: flex;
      flex-direction: column;
    }

    strong {
      text-transform: uppercase;
      height: 4em;

      display: flex;
      align-items: end;

      font-family: Gotham HTF;
      font-size: 1.83em;
      line-height: 23px;
      letter-spacing: -3%;
      font-weight: 700;
      color:#9CAFB6;

    }

    span {
      padding-top: 20px;

      font-family: PT Sans;
      font-size: 1.67em;
      font-weight: 400;
      line-height: 23px;
      letter-spacing: 1%;
      color:#454C4F;
;
    }
`;

