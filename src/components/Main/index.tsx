import React from 'react';
import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackButton,
  Profile,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackButton />
        </button>
        <Profile>
          <strong>Denilson Sousa</strong>
          <span>547 Tweets</span>
        </Profile>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
