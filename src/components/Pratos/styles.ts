import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Card = styled.div`
  background-color: ${cores.rosa};
  display: inline-block;
  position: relative;
  width: 320px;
  height: 338px;
  margin-bottom: 48px;
  color: ${cores.branca} ${TagContainer} {
    margin-right: 8px;
  }
`;

export const TituloTag = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 18, 75px;
  display: block;
  margin-left: 8px;

  color: ${cores.rosa_claro_tag};
`;
export const Nota = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-right: 7px;
  display: block;
  color: ${cores.rosa};
`;
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  display: block;
  margin-top: 4px;
  margin-left: 8px;
  margin-right: 8px;
  width: 304px;
  height: 88px;
  color: ${cores.rosa_claro_tag};
`;
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;
export const TituloNota = styled.h3`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const TituloGlobal = styled.h3`
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
  width: 100%;
`;

export const Button = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
`;

export const ImgContainer = styled.img`
  padding-left: 8px;
  padding-top: 8px;
`;
