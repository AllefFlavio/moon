import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #C7E7E2;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Title = styled.p`
  font-size: 11pt;
  font-weight: bold;
  margin: 0px;
  color: #20515A;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    align-content: center;
  }
`;

export const Link = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 80px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const LinkText = styled.span`
  font-size: 13px;
  color: #20515A;
  margin-top: 5px;
`;

export const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
`;
