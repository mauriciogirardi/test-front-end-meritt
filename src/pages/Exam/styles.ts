import styled, { keyframes } from 'styled-components';

const animateModal = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const BackgroundModal = styled.div`
  position: absolute;
  top: 8.3rem;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 10000;
  animation: ${animateModal} 0.5s;

  @media screen and (max-width: 500px) {
    top: 7.1rem;
    height: calc(100% - 7.1rem);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

export const ContainerTest = styled.div`
  background-color: #fff;
  margin: 1.5rem;
  padding: 1.5rem 1.8rem;
  position: relative;
`;

export const Test = styled.div`
  max-width: 556px;
  width: 100%;
  margin: 0 auto;
  margin-top: 0.5rem;

  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  h2 {
    margin-top: 1rem;
    font-size: 0.98rem;
    font-weight: 300;
    line-height: 1.3rem;
  }
`;

export const TopicTest = styled.a`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  cursor: pointer;
  padding: 1rem 0.5rem;
  transition: all 0.2s;
  z-index: 1;
  position: relative;

  svg {
    margin-left: auto;
    color: #fa558f;
    font-size: 1.2rem;
    z-index: 1000;

    &:hover {
      color: #333;
    }
  }

  p {
    font-size: 0.9rem;
  }

  input[type='radio'] {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0.2rem;
  }
`;

export const HeaderTest = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #757575;
    font-size: 1rem;
  }

  button {
    background-color: transparent;
    border: 0;

    svg {
      color: #fa558f;
      font-size: 1.5rem;
      transition: color 0.2s;

      &:hover {
        color: #ed1a60;
      }
    }
  }
`;

export const ModalBookMark = styled.div`
  width: 19rem;
  height: 2.8rem;
  background-color: #fa558f;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);

  p {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    background-color: transparent;
    border: 0;
    width: 1.5rem;
    height: 1.5rem;

    svg {
      color: #fff;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 500px) {
    top: -5rem;
    height: 3.5rem;
    width: 100%;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  button {
    width: 112px;
    height: 2rem;
    border: 1px solid #fa558f;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fa558f;
    font-size: 0.9rem;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    svg {
      font-size: 1rem;
    }

    &:nth-child(2) {
      background-color: #fa558f;
      margin-left: 1.5rem;
      color: #fff;
    }
  }
`;
