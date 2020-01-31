import React from 'react';
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
      console.log('Play >', media.title, 'from', media.author);
    };
  }

  return (
    <Container>
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
