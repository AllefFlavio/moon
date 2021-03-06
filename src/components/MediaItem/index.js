import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCloudDownloadAlt, faHeadphonesAlt, faPlay } from '@fortawesome/free-solid-svg-icons'

import {
  Container,
  ImageContainer,
  ImageForeground,
  Image,
  ContentContainer,
  Author,
  Title,
  Description,
  DataContainer,
  DataContent,
  ButtonsContainer,
  Button,
  ButtonText,
  LoadingContainer,
  Bar,
  Loaded,
  PercentText,
} from './styles';

export default function MediaItem({ media }) {
  const color = '#85B3AC';
  
  return (
    <Container>
      <a href={media.url}>
        <ImageContainer>
          <Image src={media.img_url} alt={media.author} />

          <ImageForeground>
            <FontAwesomeIcon icon={faPlay} color='white' size='2x'/>
          </ImageForeground>
        </ImageContainer>
      </a>
      <ContentContainer>
        <Author>{media.author}</Author>
        <Title>{media.title}</Title>
        <Description>{media.description}</Description>

        <DataContainer>
          <DataContent>
            <ButtonsContainer>
              <Button>
                <FontAwesomeIcon icon={faHeart} color={color} size='lg'/>
                <ButtonText>{media.likes}</ButtonText>
              </Button>

              <Button>
                <FontAwesomeIcon icon={faHeadphonesAlt} color={color} size='lg'/>
                <ButtonText>{media.likes}</ButtonText>
              </Button>

              <Button>
                <FontAwesomeIcon icon={faCloudDownloadAlt} color={color} size='lg'/>
              </Button>
            </ButtonsContainer>

            <LoadingContainer>
              <Bar>
                <Loaded loaded={media.percent_loaded}/>
              </Bar>
              <PercentText>{media.percent_loaded}%</PercentText>
            </LoadingContainer>
            
          </DataContent>
        </DataContainer>
      </ContentContainer>
    </Container>
  );
}
