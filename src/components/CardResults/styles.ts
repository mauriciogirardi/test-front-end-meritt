import styled from 'styled-components';

interface HeaderProps {
  backgroundSubtitle: string;
}

interface PercentProgress {
  percent: number;
}

export const Container = styled.div`
  width: 222px;
  height: 110px;
  border: 0.2rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  padding: 0.3rem 0.7rem 0.6rem 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & + div {
    margin-top: 1.4rem;
  }
`;

export const Header = styled.div<HeaderProps>`
  span {
    background-color: ${({ backgroundSubtitle }) => backgroundSubtitle};
    display: inline-block;
    color: #fff;
    font-size: 0.65rem;
    padding: 0.1rem 0.4rem;
    border-radius: 0.2rem;
  }

  h3 {
    font-weight: 700;
    font-size: 0.9rem;
    color: #000;
    width: 7rem;
    line-height: 1.2rem;
    margin: 0.3rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Footer = styled.div`
  h4 {
    color: #757575;
    font-weight: 400;
    font-size: 0.8rem;
  }
  p {
    color: #757575;
    font-size: 10px;
    font-weight: 300;
    margin-top: 0.3rem;
  }
`;

export const PercentProgress = styled.div<PercentProgress>`
  position: relative;

  svg {
    width: 4rem;
    height: 4rem;
    position: absolute;
    right: 0rem;
    top: 50%;
    transform: translateY(-50%) rotate(-35deg);

    circle {
      fill: transparent;
      stroke: #c4c4c4;
      stroke-width: 3;
      stroke-linecap: round;

      & + circle {
        stroke: #166941;
        stroke-dasharray: 250;
        stroke-dashoffset: calc(
          250 - (190 * ${({ percent }) => percent}) / 100
        );
      }
    }
  }
`;

export const PercentInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-140%, -50%);
  text-align: center;

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
