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

  function handleMedia(media) {
    return () => {
      handleInnerPage();
    };
  }

  return (
    <Container>
      <Helmet>
        <title>Jifcast | Playlist</title>
        <meta name="description" content="Here you found your playlists." />
      </Helmet>

      <MenuBar />

      <PlaylistContainer className='container'>
        <Title>Playlists</Title>

        <Line />

        {mediaData.map((media, index) => (
          <MediaItem
            key={index}
            media={media}
            onClick={handleMedia(media)}
          />
        ))}
        
      </PlaylistContainer>
    </Container>
  );
}
