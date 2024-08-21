import styled from 'styled-components';
import { cores } from '../../styles';

import fechar from '../../assets/images/lixeira-de-reciclagem 1.png';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  z-index: 1;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 360px;
  max-height: 1624px;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 0 8px;
`;

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  text-align: center;
  color: ${cores.rosa_claro_tag};
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  width: 344px;
  height: 24px;
  background-color: ${cores.rosa_claro_tag};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  text-align: center;
  color: ${cores.rosa};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${cores.branca};
  }
`;

export const CartItem = styled.li`
  display: flex;
  position: relative;
  align-items: flex-start;

  img {
    margin-top: 8px;
    margin-left: 8px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    width: 200px;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 18px;
    margin-top: 8px;
    margin-left: 8px;
    color: ${cores.rosa};
    position: relative;
  }

  span {
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
    margin-left: 8px;
    color: ${cores.rosa};
  }

  h3::after {
    content: '';
    display: block;
    height: 0;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    visibility: hidden;
  }

  h3::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -8px;
    width: 100%;
    height: 0;
  }

  span + h3::after {
    bottom: 8px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 0;
    right: 8px;
    cursor: pointer;
  }
`;
export const CartItemContainer = styled.div`
  width: 344px;
  height: 100px;
  background-color: ${cores.rosa_claro_tag};
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.p`
  color: #ffb6c1; /* Cor rosa claro */
  margin-top: 10px;
  font-size: 14px;
`;
