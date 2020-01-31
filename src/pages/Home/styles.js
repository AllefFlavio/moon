import styled from 'styled-components';

export const Container = styled.div``;

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  margin: 0px;
  padding: 0px;
  color: #20515A;
  margin: 50px 0px;

  @media (max-width: 768px) {
    margin: 10px 0px;
    font-size: 25px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #E5E5E5;
`;