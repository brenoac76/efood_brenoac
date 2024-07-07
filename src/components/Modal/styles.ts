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
`;

export const DescriptionsContainer = styled.div`
  flex-direction: column;
  padding-left: 24px;
  padding-top: 0;
`;

export const Title = styled.h2`
  width: 140px;
  height: 21px;
  font-size: 18px;
  font-weight: 900;
  color: ${cores.branca};
`;

export const Description = styled.p`
  width: 656px;
  height: 176px;
  color: ${cores.branca};
  font-size: 14px;
  padding-top: 16px;

  text-align: left;
  white-space: pre-wrap;
  line-height: 22px;
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
`;
