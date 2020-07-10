import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Denilson Sousa</h1>
        <h2>@denilsondsousa</h2>

        <p>
          Developer at <a href="https://devmars.com.br">@Devmars</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Picos, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 19 de junho de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>123</strong>
          </span>
          <span>
            <strong>745 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
