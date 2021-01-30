import React, { useEffect, useState } from 'react';

import { Circle, CircleContent, CircleText } from './styles';

interface ProgressCircleProps {
  questions: number;
  finishedQuestions: number;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  questions,
  finishedQuestions,
}) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const findPercentOfResult = (questions * finishedQuestions) / 100;
    const total = findPercentOfResult.toFixed(2).replace('0.', '');

    setPercent(Math.round(100 - Number(total)));
  }, [questions, finishedQuestions]);

  return (
    <Circle>
      <CircleContent percent={percent}>
        <svg>
          <circle cx="32" cy="32" r="30" />
          <circle cx="32" cy="32" r="30" />
        </svg>
        <CircleText>
          <p>
            <span>{finishedQuestions}</span>
            {`/${questions}`}
          </p>
          <h5>{`${percent}%`}</h5>
        </CircleText>
      </CircleContent>
    </Circle>
  );
};

export default ProgressCircle;
