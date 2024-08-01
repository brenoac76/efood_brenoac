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
  z-index: 0;
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;

  img {
    cursor: pointer;
  }
`;

export const Titulo = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rosa};
  text-align: center;
  display: flex;
  justify-content: center;
  position: absolute;
  gap: 710px;
  width: 100%;
  z-index: 3;
`;

export const CartButton = styled.button`
  font-size: 18px;
  font-weight: 900;
  color: ${cores.rosa};
  text-align: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 4;
  position: relative;

  &:hover {
    text-decoration: underline;
  }
`;

export const Apresenta = styled.div`
  position: absolute;
  top: calc(100%);
  display: flex;
  width: 100%;
  height: 280px;
  z-index: 1;
  overflow: hidden;

  img {
    width: 100%;
    min-width: 100vw;
    height: 100%;
    object-fit: cover;
  }

  .text-wrapper {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }

  .text-italiana {
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    font-size: 32px;
    line-height: 37.5px;
    width: 50px;
    height: 33.25px;
    color: ${cores.branca};
  }

  .text-dolceVita {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 32px;
    line-height: 37.5px;
    padding-top: 156.5px;
    text-align: left;
    width: 676px;
    height: 33.25px;
    color: ${cores.branca};
  }
`;
