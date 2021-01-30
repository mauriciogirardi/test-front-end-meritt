import styled, { keyframes } from 'styled-components';

interface MenuBarProps {
  isOpen: boolean;
}

const animationMenuBars = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-1rem);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BackgroundContainer = styled.div`
  background-color: #fa558f;
`;

export const Container = styled.header`
  height: 4.8rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
  margin: 0 auto;
  position: relative;

  display: flex;
  align-items: center;

  h1 {
    color: #fff;
    font-weight: 400;
    font-size: 1.3rem;
    margin-left: 2.1rem;
  }
`;

export const ContentBar = styled.div`
  button {
    background-color: transparent;
    border: 0;
  }

  svg {
    color: #fff;
    font-size: 1.6rem;
  }
`;

export const MenuBar = styled.ul<MenuBarProps>`
  position: absolute;
  bottom: -4rem;
  left: 0;
  background-color: #fa558f;
  width: 8rem;
  height: 5rem;
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  animation: ${animationMenuBars} 0.5s;

  li {
    padding: 0.5rem;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f9206c;
    }

    a {
      color: #fff;
      display: block;
    }
  }
`;
