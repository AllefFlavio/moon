import React from 'react';

import SEO from 'react-seo-component';

import {
  Container,
  ContentContainer,
  Title,
} from './styles';
import { MenuBar } from '../../components';

export default function InnerPage({ history }) {

  function handleTitle() {
    history.push('/index');
  }

  return (
    <SEO
      title="Jifcast | This is page 2"
      titleTemplate="Jifcast | Description"
      description="This is the description of page 2."
      pathname="https://jifcast-af.herokuapp.com/inner-page"
      siteLanguage="pt"
      siteLocale="pt-br"
      author="AllefFlavio"
      article={true}
    >
      <Container>

        <MenuBar onClickTitle={handleTitle} />

        <ContentContainer className="container">
          <Title>This is page 2</Title>

          <p>
            This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description.
          </p>
        </ContentContainer>
      </Container>
    </SEO>
  );
}
