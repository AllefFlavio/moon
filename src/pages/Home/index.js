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

  return (
    <Container>
      <Helmet>
        <title>Jifcast | Playlist for U!</title>
        <meta name="description" content="Here you found your playlists. Here you found your playlists. Here you found your playlists. Here you found your playlists." />
        <meta name="keywords" content="jifcast, playlist, podcast, jifcast-af, allefflavio, JIFCAST, jifcast-af, jifcast heroku" />
        <link rel="canonical" href="https://jifcast-af.herokuapp.com/" />
      </Helmet>

      <MenuBar />

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
