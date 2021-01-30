import styled from 'styled-components';

interface HeaderEvidenceProps {
  backgroundSubtitle: string;
  isDisabled: boolean;
}

export const Container = styled.button`
  background-color: transparent;
  max-width: 222px;
  width: 100%;
  height: 150px;
  border: 0.2rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
  padding: 0.4rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.1rem 0;
  transition: box-shadow 0.2s;

  & + button {
    margin-left: 1.4rem;
  }

  &:hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  }

  &:hover:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }

  &:disabled {
    background-color: #c4c4c4;
  }

  @media screen and (max-width: 1176px) {
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 500px) {
    background-color: #fff;
    max-width: 100%;
  }
`;

export const HeaderEvidence = styled.div<HeaderEvidenceProps>`
  text-align: left;

  span {
    background-color: ${({ backgroundSubtitle, isDisabled }) =>
      isDisabled ? '#898585' : backgroundSubtitle};
    display: inline-block;
    color: ${({ isDisabled }) => (isDisabled ? '#c4c4c4' : '#fff')};
    font-size: 0.7rem;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
  }

  h2 {
    font-weight: 700;
    font-size: 1rem;
    color: ${({ isDisabled }) => (isDisabled ? '' : '#000')};
    margin-top: 0.7rem;
  }
`;

export const ContentEvidence = styled.div`
  div {
    display: flex;
    align-items: center;

    p {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      color: #757575;
      margin-right: 1.3rem;

      svg {
        margin-right: 0.2rem;
      }
    }
  }
`;

export const FooterEvidence = styled.div`
  margin-top: 1rem;

  p {
    color: #757575;
    font-size: 0.7rem;
  }
`;
