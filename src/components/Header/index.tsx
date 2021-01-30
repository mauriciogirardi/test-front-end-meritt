import React, { useCallback, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, BackgroundContainer, ContentBar, MenuBar } from './styled';

const Header: React.FC = () => {
  const [isOpenMenuBars, setIsOpenMenuBars] = useState(false);

  const handleMenuBar = useCallback(() => {
    setIsOpenMenuBars(prevState => !prevState);
  }, []);

  return (
    <BackgroundContainer>
      <Container>
        <ContentBar>
          <button type="button" onClick={handleMenuBar}>
            {isOpenMenuBars ? <FiX /> : <FiMenu />}
          </button>

          {isOpenMenuBars && (
            <MenuBar isOpen={isOpenMenuBars}>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
            </MenuBar>
          )}
        </ContentBar>
        <h1>SOMOS</h1>
      </Container>
    </BackgroundContainer>
  );
};

export default Header;
