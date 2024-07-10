import styled from 'styled-components';
import { cores } from '../../styles';

export const Imagem = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
`;

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rosa};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  gap: 659px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: 0;
  z-index: 1;
`;

export const Apresenta = styled.div`
  position: absolute;
  top: calc(100%);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 280px;
  z-index: 0;
`;
