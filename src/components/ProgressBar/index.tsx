import React from 'react';

import { Container } from './styles';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  widthContainer?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = 'blueviolet',
  widthContainer = '100%',
}) => {
  return (
    <Container color={color} widthContainer={widthContainer}>
      <progress value={value} max={max} />
    </Container>
  );
};

export default ProgressBar;
