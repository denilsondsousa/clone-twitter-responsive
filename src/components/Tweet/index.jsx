import React from 'react';

import {
  Container,
  SomeIcon,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

function Tweet() {
  return (
    <Container>
      <Retweeted>
        <SomeIcon /> Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Denilson Sousa</strong>
            <span>@denilsondsousa</span>

            <Dot />
            <time>08 de julho</time>
          </Header>

          <Description>Nave não tem ré.</Description>

          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              12
            </Status>
            <Status>
              <RetweetIcon />
              15
            </Status>
            <Status>
              <LikeIcon />
              12
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;
