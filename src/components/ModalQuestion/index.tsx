/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useCallback, useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import {
  SelectedQuestionsModalHeader,
  SelectedQuestionsModal,
  QuestionsContent,
  QuestionNumber,
} from './styles';

interface ModalQuestionsProps {
  closeModal(): void;
  totalQuestions: number;
  finishedQuestion: number;
  alternative?: number;
  bookMark?: boolean;
}

interface QuestionCard {
  number: number;
  review: boolean;
  complete: boolean;
  selected: boolean;
}

const ModalQuestions: React.FC<ModalQuestionsProps> = ({
  closeModal,
  totalQuestions,
  finishedQuestion,
  alternative,
  bookMark,
}) => {
  const [selectedQuestionCard, setSelectedQuestionCard] = useState<
    QuestionCard[]
  >([]);
  const [selectedQuestion, setSelectedQuestion] = useState(false);
  const total = totalQuestions;

  useEffect(() => {
    const arrayNumber = [];

    for (let i = 0; i < total; i++) {
      arrayNumber.push({
        number: i,
        review: false,
        complete: false,
        selected: false,
      });
    }

    setSelectedQuestionCard([...arrayNumber]);
  }, [total]);

  const handleQuestion = useCallback(
    (id: number) => {
      const findSelected = selectedQuestionCard.map(item => {
        return item.number === id ? { ...item, selected: true } : item;
      });

      if (findSelected) {
        // setSelectedQuestion(prevState => !prevState);
      }
    },

    [selectedQuestionCard],
  );

  return (
    <>
      <SelectedQuestionsModal>
        <SelectedQuestionsModalHeader>
          <div />
          <p>
            {finishedQuestion + 1}
            <span>{`/${totalQuestions}`}</span>
          </p>
          <FiX onClick={closeModal} />
        </SelectedQuestionsModalHeader>
        <QuestionsContent>
          {selectedQuestionCard.map((item, index) => (
            <QuestionNumber
              key={index}
              isComplete={!!alternative && finishedQuestion === index}
              isSelected={selectedQuestion}
            >
              {bookMark && finishedQuestion === index && (
                <FaBookmark color="#FA558F" size={13} />
              )}
              <button type="button" onClick={() => handleQuestion(index + 1)}>
                {item.number + 1}
              </button>
            </QuestionNumber>
          ))}
        </QuestionsContent>
      </SelectedQuestionsModal>
    </>
  );
};

export default ModalQuestions;
