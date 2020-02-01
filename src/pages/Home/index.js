import React from 'react';

import SEO from 'react-seo-component';

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
    <SEO 
      title="Jifcast | Playlist"
      pageTitle="Jifcast | Playlist"
      description="Here you found your playlists."
      pathname="https://jifcast-af.herokuapp.com/"
      siteLanguage="pt"
      siteLocale="pt-br"
    >
      <Container>

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
    </SEO>
  );
}
