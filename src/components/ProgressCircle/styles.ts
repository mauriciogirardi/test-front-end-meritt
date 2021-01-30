import styled from 'styled-components';

interface CircleContentProgress {
  percent: number;
}

export const Circle = styled.div`
  background-color: #fff;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CircleContent = styled.div<CircleContentProgress>`
  position: relative;
  width: 4rem;
  height: 4rem;

  svg {
    position: relative;
    width: 4rem;
    height: 4rem;

    circle {
      width: 4rem;
      height: 4rem;
      fill: none;
      stroke-width: 3;
      stroke: #166941;
      stroke-dasharray: 190;
      stroke-dashoffset: 190;

      &:nth-child(1) {
        stroke: #c4c4c4;
        stroke-dashoffset: 0;
      }

      &:nth-child(2) {
        stroke: #166941;
        stroke-dashoffset: calc(
          190 - (190 * ${({ percent }) => percent}) / 100
        );
      }
    }
  }
`;

export const CircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 0.8rem;
    color: #757575;

    span {
      font-size: 0.9rem;
      font-weight: 700;
      color: #166941;
    }
  }

  h5 {
    font-weight: 400;
  }
`;
