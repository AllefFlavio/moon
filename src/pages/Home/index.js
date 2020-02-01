import React from 'react';
import { Helmet } from 'react-helmet';

import mediaData from '../../assets/media.json';

import { MenuBar, MediaItem } from '../../components';
import { 
  Container,
  PlaylistContainer,
  Title,
  Line,
} from './styles';

export default function Home({ history }) {

  function handleInnerPage() {
    history.push('/inner-page');
  }

  return (
    <Container>
      <Helmet>
        <title>Jifcast | Playlist</title>
        <meta name="description" content="Here you found your playlists." />
        <meta name="keywords" content="jifcast, playlist, podcast, jifcast-af, allefflavio, JIFCAST, jifcast-af, jifcast heroku" />
      </Helmet>

      <MenuBar onClickTitle={handleInnerPage} />

      <PlaylistContainer className='container'>
        <Title>Playlists</Title>

        <Line />

        {mediaData.map((media, index) => (
          <MediaItem
            key={index}
            media={media}
          />
        ))}
        
      </PlaylistContainer>
    </Container>
  );
}
