import styled, { keyframes } from 'styled-components';

interface QuestionNumberProps {
  isComplete: boolean;
  isSelected: boolean;
}

const animateModal = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const SelectedQuestionsModal = styled.div`
  position: absolute;
  right: 17rem;
  top: -3.5rem;
  background-color: #fff;
  border-radius: 0.2rem;
  width: 284px;
  height: 440px;
  padding: 1rem 2rem;
  z-index: 10000;
  overflow: hidden;
  animation: ${animateModal} 0.5s;

  @media screen and (max-width: 500px) {
    left: 50%;
    transform: translateX(-50%);
    top: -2rem;
  }
`;

export const SelectedQuestionsModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  p {
    color: #000;
    font-weight: 700;
    font-size: 1rem;

    span {
      color: #c4c4c4;
      font-weight: 400;
    }
  }

  svg {
    position: absolute;
    right: 0;
    color: #c4c4c4;
    font-size: 1.3rem;
  }
`;

export const QuestionsContent = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-column-gap: 1rem;
  gap: 0.8rem;
`;

export const QuestionNumber = styled.div<QuestionNumberProps>`
  position: relative;

  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-70%);
    top: -0.4rem;
  }

  button {
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    font-size: 0.9rem;
    transition: all 0.2s;

    border: ${({ isComplete }) => (isComplete ? '1px solid #757575' : '0')};
    border-color: ${({ isSelected }) => (isSelected ? '#f7598f' : '#757575')};

    background-color: ${({ isSelected }) =>
      isSelected ? '#f7598f' : 'transparent'};

    color: ${({ isComplete }) => (isComplete ? '#000' : '#757575')};
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};

    font-weight: ${({ isComplete }) => (isComplete ? '700' : '400')};

    &:hover {
      background-color: #f47fa6;
      border-color: #f47fa6;
      color: #fff;
    }
  }
`;
