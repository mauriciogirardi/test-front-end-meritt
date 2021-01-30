import React from 'react';

import ProgressCircle from 'components/ProgressCircle';

import { Container, Footer, Header, Content } from './styles';

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

      <ProgressCircle
        finishedQuestions={finishedQuestions}
        questions={questions}
      />
    </Container>
  );
};

export default CardResults;
