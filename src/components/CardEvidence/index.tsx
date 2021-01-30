import React, { ButtonHTMLAttributes } from 'react';
import { BsClockFill, BsFillGrid3X2GapFill } from 'react-icons/bs';

import ProgressBar from 'components/ProgressBar';

import {
  Container,
  FooterEvidence,
  ContentEvidence,
  HeaderEvidence,
} from './styles';

type CardEvidenceProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  subtitle: string;
  backgroundSubtitle?: string;
  time: string;
  date: string;
  question?: number;
  maxQuestion: number;
  progressBar: boolean;
  isDisabled?: boolean;
};

const CardEvidence: React.FC<CardEvidenceProps> = ({
  title,
  subtitle,
  backgroundSubtitle = '#ff9153',
  time,
  date,
  question = 0,
  maxQuestion,
  progressBar = true,
  isDisabled = false,
  ...rest
}) => {
  return (
    <Container {...rest} disabled={isDisabled}>
      <HeaderEvidence
        backgroundSubtitle={backgroundSubtitle}
        isDisabled={isDisabled}
      >
        <span>{subtitle}</span>
        <h2>{title}</h2>
      </HeaderEvidence>
      <ContentEvidence>
        {progressBar && (
          <ProgressBar value={question} max={maxQuestion} color="#fa558f" />
        )}
        <div>
          <p>
            <BsClockFill size={12} />
            {time}
          </p>
          <p>
            <BsFillGrid3X2GapFill size={15} />
            {progressBar
              ? `${question}/${maxQuestion} questões`
              : `${maxQuestion} questões`}
          </p>
        </div>
      </ContentEvidence>
      <FooterEvidence>
        <p>{date}</p>
      </FooterEvidence>
    </Container>
  );
};

export default CardEvidence;
