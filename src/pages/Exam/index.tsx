import React, { useCallback, useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
// import htmlParser from 'html-react-parser';

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
} from './styles';

interface Answer {
  id: string;
  id_question: string;
  value: string;
}

interface QuestionProps {
  questions: {
    ref: string;
    id_group: string;
    answers: Answer[];
    type: string;
    question: string;
  };
}

const Exam: React.FC = () => {
  const [bookMark, setBookMark] = useState(false);
  const [modalBookMark, setModalBookMark] = useState(false);
  const [questions, setQuestions] = useState<QuestionProps[]>([]);
  const [showQuestions, setShowQuestion] = useState(false);

  useEffect(() => {
    async function handleProofs() {
      const { data } = await api.get('/proofs');

      setQuestions(data);
    }

    handleProofs();
  }, []);

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
      <SubHeader isOpenModal={handleShowQuestions} />

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

          {showQuestions && <ModalQuestions closeModal={handleShowQuestions} />}

          <HeaderTest>
            <p>1</p>
            <button type="button" onClick={handleBookMark}>
              {bookMark ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </HeaderTest>
          <Test>
            <img
              src="https://fazendacapoava.com.br/wp-content/uploads/2019/09/natureza.jpg"
              alt="test"
            />
          </Test>
        </ContainerTest>
      </Container>
    </>
  );
};

export default Exam;
