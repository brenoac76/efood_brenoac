import styled from 'styled-components';
import { cores } from '../../styles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${cores.rosa};
  width: 1024px;
  height: 344px;
  padding: 32px;
  display: flex;
  position: relative;

  @media (max-width: 768px) {
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    justify-content: center;
    align-items: center;

    padding: 8px;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    background-color: ${cores.rosa};
    width: 90%;
    max-width: 1024px;
    height: auto;
    max-height: 90%;
    padding: 16px;
    display: flex;
    flex-direction: row;
    gap: 16px;
    position: relative;
  }
`;

export const ImgContainer = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 150px;
    margin: 0 auto;
    align-self: flex-start;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    width: auto;
    height: 280px;
    object-fit: cover;
  }
`;

export const DescriptionsContainer = styled.div`
  flex-direction: column;
  padding-left: 24px;
  padding-top: 0;
  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

export const Title = styled.h2`
  height: 21px;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branca};
  @media (max-width: 768px) {
    margin-top: 10px;
    align-self: flex-start;
  }
`;

export const Description = styled.div`
  width: 656px;
  max-height: 176px;
  height: 100%;
  color: ${cores.branca};
  font-size: 14px;
  padding-top: 16px;
  text-align: left;
  white-space: pre-wrap;
  line-height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
    max-width: 218px;
    width: 100%;
    text-align: justify;
    div {
      margin-top: 8px;
    }
  }
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 100%;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 218px;
  height: 24px;
  background-color: ${cores.rosa_claro_tag};
  color: ${cores.rosa};
  border: none;
  margin-top: 32px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;
