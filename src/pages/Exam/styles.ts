import styled, { keyframes } from 'styled-components';

const animateModal = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const BackgroundModal = styled.div`
  position: absolute;
  top: 8.3rem;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: calc(100% - 8.3rem);
  z-index: 10000;
  animation: ${animateModal} 0.5s;

  @media screen and (max-width: 500px) {
    top: 7.1rem;
    height: calc(100% - 7.1rem);
  }
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
