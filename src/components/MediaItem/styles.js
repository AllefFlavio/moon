import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 25px 0px;
  /* align-items: center; */
  border-bottom-style: solid; 
  border-bottom-width: 2px;
  border-bottom-color: white;
  
  @media (max-width: 768px) {
    border-bottom-color: #89D8CB;
    border-bottom-width: 1px;
  }
`;

export const ImageContainer = styled.div`
  cursor: pointer;
`;

export const ImageForeground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: -125px;
  width: 125px;
  height: 125px;
  background-color: rgba(0,0,0,.3);
  z-index: 5;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-top: -80px;
  }

  &:hover {
    background-color: rgba(0,0,0,.4);
  }
`;

export const Image = styled.img`
  width: 125px;
  height: 125px;
  margin-right: 25px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Author = styled.h2`
  font-size: 14px;
  margin: 0px 0px 5px 0px;
  padding: 0px;
  color: #8CB7B1;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  margin: 0px 0px 15px 0px;
  padding: 0px;
  color: #20515A;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const Description = styled.h3`
  font-size: 18px;
  margin: 0px;
  padding: 0px;
  color: #89D8CB;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

export const DataContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Button = styled.a`
  cursor: pointer;
  margin-right: 40px;

  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const ButtonText = styled.span`
  margin-left: 7px;
  color: #85B3AC;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Bar = styled.div`
  width: 200px;
  height: 6px;
  background-color: white;
  margin-right: 15px;
  border-radius: 3px;
  border-radius: 3px;
`;

export const Loaded = styled.div`
  height: 100%;
  width: ${({ loaded = 50 }) => `${loaded}%`};
  background-color: #4F978D;
  border-radius: 3px;
  border-radius: 3px;
`;

export const PercentText = styled.span`
  color: #85B3AC;
  font-size: 17px;
`;
