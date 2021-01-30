import React, { useEffect, useState } from 'react';

import {
  Container,
  Footer,
  Header,
  Content,
  PercentProgress,
  PercentInner,
} from './styles';

interface CardResultsProps {
  title: string;
  subtitle: string;
  backgroundSubtitle?: string;
  date: string;
  resultInTime: string;
  questions: number;
  finishedQuestions: number;
}

const CardResults: React.FC<CardResultsProps> = ({
  title,
  subtitle,
  backgroundSubtitle = '#ff9153',
  resultInTime,
  date,
  finishedQuestions,
  questions,
}) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const findPercent = 100 - (questions * finishedQuestions) / 100;
    setPercent(findPercent);
  }, [questions, finishedQuestions]);

  return (
    <Container>
      <Content>
        <Header backgroundSubtitle={backgroundSubtitle}>
          <span>{subtitle}</span>
          <h3>{title}</h3>
        </Header>

        <Footer>
          <h4>{resultInTime}</h4>
          <p>{date}</p>
        </Footer>
      </Content>

      <PercentProgress percent={percent}>
        <svg>
          <circle cy="31" cx="31" r="30" />
          <circle cy="31" cx="31" r="30" />
        </svg>
        <PercentInner>
          <p>
            <span>{finishedQuestions}</span>
            {`/${questions}`}
          </p>
          <h5>{`${percent}%`}</h5>
        </PercentInner>
      </PercentProgress>
    </Container>
  );
};

export default CardResults;
