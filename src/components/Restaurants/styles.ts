import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Card = styled.div`
  background-color: ${cores.branca};
  display: inline-block;
  position: relative;
  width: 472px;
  height: 398px;
  margin-bottom: 48px;
  border-top: 0px solid ${cores.rosa};
  border-right: 1px solid ${cores.rosa};
  border-bottom: 1px solid ${cores.rosa};
  border-left: 1px solid ${cores.rosa};

  ${TagContainer} {
    margin-right: 0;
    margin-left: 8px;
  }
`;

export const TituloTag = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-left: 7px;
  margin-bottom: 16px;
  color: ${cores.rosa};
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
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 16px;
  margin-left: 8px;
  margin-right: 8px;
  width: 456px;
  color: ${cores.rosa};
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
  bottom: 0;
  left: 0;
  width: 100px;
  height: 24px;
`;

export const ImgContainer = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
