import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import {
  FiX,
  FiMoreHorizontal,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import htmlParser from 'html-react-parser';

import Header from 'components/Header';
import ModalQuestions from 'components/ModalQuestion';
import SubHeader from 'components/SubHeader';

import api from 'service/api';
import {
  Container,
  Test,
  ContainerTest,
  HeaderTest,
  BackgroundModal,
  ModalBookMark,
  TopicTest,
  Buttons,
} from './styles';

interface Answer {
  id_question: string;
  value: string;
}

interface QuestionProps {
  ref: string;
  id_group: string;
  answers: Answer[];
  type: string;
  question: string;
}

const Exam: React.FC = () => {
  const [bookMark, setBookMark] = useState(false);
  const [modalBookMark, setModalBookMark] = useState(false);

  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const [showQuestions, setShowQuestion] = useState(false);
  const [selectedAlternative, setSelectedAlternative] = useState<number>();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [timeLine, setTimeLine] = useState(0);
  const questionIndex = currentQuestion;
  const question = questions[questionIndex];
  const page = questionIndex + 1;
  const questionId = `alternative__${questionIndex}`;

  useEffect(() => {
    async function handleProofs() {
      const { data } = await api.get('/proofs');

      const findValueQuestion: any = Object.values(data[0].questions);

      setTotalQuestion(Object.values(data[0].questions).length);
      setQuestions(Object.values(data[0].questions));
      setAnswers(Object.values(findValueQuestion[questionIndex].answers));
    }
    handleProofs();
  }, [questionIndex]);

  const handleChangeAlternative = useCallback((alternativeIndex: number) => {
    setSelectedAlternative(alternativeIndex);
  }, []);

  const handleSubmitQuestion = useCallback(
    (e: ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();

      const nextQuestion = questionIndex + 1;
      const findLengthTimeLine = 100 / totalQuestion;

      if (nextQuestion < totalQuestion) {
        setCurrentQuestion(nextQuestion);
        setTimeLine(findLengthTimeLine + findLengthTimeLine * nextQuestion);
      }
    },
    [questionIndex, totalQuestion],
  );

  const handleBack = useCallback(() => {
    const nextQuestion = questionIndex - 1;
    const findLengthTimeLine = 100 / totalQuestion;

    setTimeLine(timeLine - findLengthTimeLine);

    if (nextQuestion < totalQuestion) {
      if (nextQuestion === -1) return;
      setCurrentQuestion(nextQuestion);
    }
  }, [questionIndex, totalQuestion, timeLine]);

  const handleBookMark = useCallback(() => {
    setBookMark(prevState => !prevState);
    if (!bookMark) {
      setModalBookMark(true);
    } else {
      setModalBookMark(false);
    }
  }, [bookMark]);

  const handleCloseBookMark = useCallback(() => {
    setModalBookMark(prevState => !prevState);
  }, []);

  const handleShowQuestions = useCallback(() => {
    setShowQuestion(prevState => !prevState);
  }, []);

  return (
    <>
      {showQuestions && <BackgroundModal onClick={handleShowQuestions} />}

      <Header />
      <SubHeader isOpenModal={handleShowQuestions} progressBar={timeLine} />

      <Container>
        <ContainerTest>
          {modalBookMark && (
            <ModalBookMark>
              <p>Marcar para revisar mais tarde</p>
              <button type="button" onClick={handleCloseBookMark}>
                <FiX />
              </button>
            </ModalBookMark>
          )}

          {showQuestions && (
            <ModalQuestions
              closeModal={handleShowQuestions}
              finishedQuestion={questionIndex}
              totalQuestions={totalQuestion}
              alternative={selectedAlternative}
              bookMark={bookMark}
              // answers={answers}
            />
          )}

          <HeaderTest>
            <p>{page}</p>
            <button type="button" onClick={handleBookMark}>
              {bookMark ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </HeaderTest>
          <Test>
            <img
              src="https://fazendacapoava.com.br/wp-content/uploads/2019/09/natureza.jpg"
              alt="test"
            />
            <h2>{question && htmlParser(question.question)}</h2>

            <form onSubmit={handleSubmitQuestion}>
              {answers.map((alternative, alternativeIndex) => {
                const alternativeId = `alternative__${alternativeIndex}`;

                return (
                  <TopicTest
                    key={alternativeId}
                    as="label"
                    htmlFor={alternativeId}
                  >
                    <input
                      type="radio"
                      id={alternativeId}
                      name={questionId}
                      onChange={() => handleChangeAlternative(alternativeIndex)}
                    />
                    {htmlParser(alternative.value)}
                    <FiMoreHorizontal />
                  </TopicTest>
                );
              })}

              <Buttons>
                <button type="button" onClick={handleBack}>
                  <FiChevronLeft />
                  Anterior
                </button>
                <button type="submit">
                  Próximo
                  <FiChevronRight />
                </button>
              </Buttons>
            </form>
          </Test>
        </ContainerTest>
      </Container>
    </>
  );
};

export default Exam;
