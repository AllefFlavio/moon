import React from 'react';
import { Helmet } from 'react-helmet';

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
    <Container>
      <Helmet>
        <title>Jifcast | Description</title>
        <meta name="description" content="This is the description of page 2." />
        <meta name="keywords" content="jifcast, description, podcast, jifcast-af, allefflavio, JIFCAST, jifcast-af, jifcast heroku" />
        <link rel="canonical" href="https://jifcast-af.herokuapp.com/inner-page" />

      </Helmet>

      <MenuBar onClickTitle={handleTitle} />

      <ContentContainer className="container">
        <Title>This is page 2</Title>

        <p>
          This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description. This is page 2 description.
        </p>
      </ContentContainer>
    </Container>
  );
}
