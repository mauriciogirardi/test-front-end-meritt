import React, { useCallback, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { MdSend } from 'react-icons/md';

import ProgressBar from 'components/ProgressBar';

import {
  ButtonSubmitTest,
  SubHeaderTimer,
  Container,
  SubHeaderQuestions,
} from './styles';

interface SubMenuProps {
  isOpenModal?: () => void;
  progressBar?: number;
}

const SubHeader: React.FC<SubMenuProps> = ({
  isOpenModal,
  progressBar = 0,
}) => {
  const [showTimer, setShowTimer] = useState(true);

  const handleShowTime = useCallback(() => {
    setShowTimer(prevState => !prevState);
  }, []);

  return (
    <>
      <Container>
        <h2>Linguagens e Códigos</h2>
        <h2>LC</h2>
        <SubHeaderTimer>
          <button type="button" onClick={handleShowTime}>
            {showTimer ? <FiEyeOff /> : <FiEye />}
          </button>
          <span className={!showTimer ? 'hide' : 'show'}>00:30:45</span>
        </SubHeaderTimer>
        <SubHeaderQuestions>
          <button type="button" onClick={isOpenModal}>
            <BsFillGrid3X2GapFill />
          </button>
          <span>Questões</span>
        </SubHeaderQuestions>
        <ButtonSubmitTest>
          <p>Entregar prova</p>
          <MdSend />
        </ButtonSubmitTest>
      </Container>
      <ProgressBar value={progressBar} color="#FA558F" />
    </>
  );
};

export default SubHeader;
