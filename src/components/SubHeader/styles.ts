import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 4rem;
  padding: 0 1.5rem;

  h2 {
    color: #757575;
    font-weight: 700;
    font-size: 1.3rem;

    &:nth-child(2) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    height: 3.3rem;

    h2 {
      display: none;

      &:nth-child(2) {
        display: block;
        font-size: 0.8rem;
      }
    }
  }
`;

export const SubHeaderTimer = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: 0;

    svg {
      font-size: 1.2rem;
      margin-right: 0.9rem;
      color: #fa558f;
      margin-bottom: -0.3rem;
    }
  }

  span.show {
    font-size: 1rem;
    color: #757575;
    min-width: 4.2rem;
    display: block;
    width: 100%;
  }

  span.hide {
    background-color: #f0f2f5;
    color: #f0f2f5;
    min-width: 4.2rem;
    display: block;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    button {
      svg {
        font-size: 1rem;
        margin-right: 0.5rem;
        margin-bottom: -0.15rem;
      }
    }
    span.show {
      font-size: 0.9rem;
    }
  }
`;

export const SubHeaderQuestions = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: 0;

    svg {
      font-size: 1.5rem;
      margin-right: 0.9rem;
      color: #fa558f;
      margin-bottom: -0.3rem;
    }
  }

  span {
    font-size: 1rem;
    color: #757575;
  }

  @media screen and (max-width: 500px) {
    button {
      svg {
        font-size: 1.2rem;
        margin-right: 0.5rem;
        margin-bottom: -0.15rem;
      }
    }

    span {
      font-size: 0.9rem;
    }
  }
`;

export const ButtonSubmitTest = styled.button`
  background-color: transparent;
  border: 1px solid #fa558f;
  color: #fa558f;
  max-width: 11rem;
  width: 100%;
  height: 2rem;
  border-radius: 0.2rem;
  font-size: 0.9rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    color: #ed1a60;
    border-color: #ed1a60;
    box-shadow: 0px 10px 13px -7px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-left: 0.7rem;
    font-size: 1rem;
  }

  @media screen and (max-width: 500px) {
    border: 0;
    max-width: 2rem;

    svg {
      font-size: 1rem;
    }

    p {
      display: none;
    }
  }
`;
