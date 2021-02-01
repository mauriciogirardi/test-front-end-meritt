import styled from 'styled-components';

interface ContainerProps {
  color: string;
  widthContainer: string;
}

export const Container = styled.div<ContainerProps>`
  progress[value] {
    appearance: none;
    -webkit-appearance: none;
    width: ${({ widthContainer }) => widthContainer};
  }

  progress[value]::-webkit-progress-bar {
    background-color: #c4c4c4;
    height: 3px;
    border-radius: 2rem;
  }

  progress[value]::-webkit-progress-value {
    background-color: ${({ color }) => color};
    height: 3px;
    border-radius: 0.2rem;
  }
`;
