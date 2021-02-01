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
}

interface QuestionCard {
  number: number;
  review: boolean;
  complete: boolean;
  selected: boolean;
}

const ModalQuestions: React.FC<ModalQuestionsProps> = ({ closeModal }) => {
  const [selectedQuestionCard, setSelectedQuestionCard] = useState<
    QuestionCard[]
  >([]);
  const [selectedQuestion, setSelectedQuestion] = useState(false);

  useEffect(() => {
    const arrayNumber = [];

    for (let i = 1; i < 46; i++) {
      arrayNumber.push({
        number: i,
        review: false,
        complete: false,
        selected: false,
      });
    }

    setSelectedQuestionCard([...arrayNumber]);
  }, []);

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
            20
            <span>/45</span>
          </p>
          <FiX onClick={closeModal} />
        </SelectedQuestionsModalHeader>
        <QuestionsContent>
          {selectedQuestionCard.map((item, index) => (
            <QuestionNumber
              key={index}
              isComplete
              isSelected={selectedQuestion}
            >
              {item.review && <FaBookmark color="#FA558F" size={13} />}
              <button type="button" onClick={() => handleQuestion(index + 1)}>
                {item.number}
              </button>
            </QuestionNumber>
          ))}
        </QuestionsContent>
      </SelectedQuestionsModal>
    </>
  );
};

export default ModalQuestions;
