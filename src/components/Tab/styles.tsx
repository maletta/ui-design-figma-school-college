import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-family: Gotham HTF;
  color: var(--white);
  text-transform: uppercase;


  ul {
    display: flex;

    list-style: none;
  }

  li {
    position: relative;

    font-size: 1.425em;
    padding: 18px 45px;

    &.active{
      &::before{
        content: "";

        position: absolute;
        top: 8px;

        width: 100%;
        height: 6px;

        background-image: linear-gradient(to right, var(--pink) 19%,  transparent 0%);

      }
   }
  }

`;
