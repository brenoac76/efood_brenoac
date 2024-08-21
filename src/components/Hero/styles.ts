import styled from 'styled-components';
import { cores } from '../../styles';

export const Imagem = styled.div`
  width: 100vw;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 64px;
  width: 100%;
`;

export const Titulo = styled.h2`
  font-size: 36px;
  padding-top: 260px;
  text-align: center;
  font-weight: 900;
  color: ${cores.rosa};
  width: 100%;

  @media (max-width: 768px) {
    padding-top: 200px;
    font-size: 28px;
    width: 90%;
    margin: 0 auto;
  }
`;
