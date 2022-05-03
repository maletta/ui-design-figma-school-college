import styled from "styled-components";

interface Props {
  direction: string;
}

export const Container = styled.div<Props>`

  width: 100%;
  overflow: hidden;

  display: inline-block;
  white-space: nowrap;

  p {
    font-family: 'Gotham HTF';
    font-style: normal;
    font-weight: 400;
    font-size: 83px;
    line-height: 87px;
    text-transform: uppercase;
    color: var(--white);

    animation: ${({direction}) => `${direction} 15s linear infinite`};

    @keyframes slide-left {
      from {
        -webkit-transform: translateX(0);
                transform: translateX(0);
      }
      to {
        -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
      }
    }

    @keyframes slide-right {
      from {
        -webkit-transform: translateX(0);
                transform: translateX(0);
      }
      to {
        -webkit-transform: translateX(100%);
                transform: translateX(100%);
      }
    }
  }
`;
