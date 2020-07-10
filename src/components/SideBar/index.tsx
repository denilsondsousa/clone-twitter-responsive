import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

import List from '../List';
import FollowSuggest from '../FollowSuggestion/';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggest
                name="Desenvolvimento Python"
                nickiname="pythonfordev"
              />,
              <FollowSuggest
                name="Desenvolvimento Python"
                nickiname="pythonfordev"
              />,
              <FollowSuggest
                name="Desenvolvimento Python"
                nickiname="pythonfordev"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
