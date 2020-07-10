import React from 'react';

import Button from '../Button';

import {
  Container,
  TopSide,
  Logo,
  MenuButtons,
  HomeIcon,
  BellIcon,
  FavoriteIcon,
  ProfileIcon,
  EmailIcon,
  BottomSide,
  ProfileData,
  ExitIcon,
  Avatar,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />

        <MenuButtons>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButtons>

        <MenuButtons>
          <BellIcon />
          <span>Notificações</span>
        </MenuButtons>

        <MenuButtons>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButtons>

        <MenuButtons>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButtons>

        <MenuButtons className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButtons>

        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BottomSide>
        <Avatar />
        <ProfileData>
          <strong>Denilson Sousa</strong>
          <span>@denilsondsousa</span>
        </ProfileData>
        <ExitIcon />
      </BottomSide>
    </Container>
  );
};

export default MenuBar;
