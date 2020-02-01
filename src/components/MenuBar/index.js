import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faMicrophoneAlt, faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'

import {
  Container,
  Title,
  LinksContainer,
  Link,
  LinkText,
  ProfileImage,
  Content,
} from './styles';

export default function MenuBar({
  onClickTitle,
  onClickRefresh,
  onClickDiscover,
  onClickNotifications,
  onClickUser,
}) {
  const color = '#5EA198';

  const userImageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrVlCvgSPl6pMW9xnmcASQA9QNmJAkXIPETxOC7ZQBU2SIoyRC';

  return (
    <Container>
      <Content className="container">
        <Title onClick={onClickTitle}>jifcast</Title>

        <LinksContainer>
          <Link onClick={onClickRefresh}>
            <FontAwesomeIcon icon={faSync} color={color} size='lg'/>

            <LinkText>refresh</LinkText>
          </Link>

          <Link onClick={onClickDiscover}>
            <FontAwesomeIcon icon={faMicrophoneAlt} color={color} size='lg'/>

            <LinkText>discover</LinkText>
          </Link>

          <Link onClick={onClickNotifications}>
            <FontAwesomeIcon icon={faHeadphonesAlt} color={color} size='lg'/>

            <LinkText>notifications</LinkText>
          </Link>

          <Link onClick={onClickUser}>
            <ProfileImage src={userImageURL} alt='profile image'/>

            <LinkText>username</LinkText>
          </Link>
        </LinksContainer>
      </Content>
    </Container>
  );
}
