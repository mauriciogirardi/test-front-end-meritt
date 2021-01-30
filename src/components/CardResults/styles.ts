import styled from 'styled-components';

interface HeaderProps {
  backgroundSubtitle: string;
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
