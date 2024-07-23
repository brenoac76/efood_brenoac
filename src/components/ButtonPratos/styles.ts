import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cores } from '../../styles';

export const ButtonContainer = styled.button`
  background-color: ${cores.rosa_claro_tag};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  width: 304px;
  height: 24px;
  padding: 4px 6px;
  display: inline-block;
  position: absolute;
  bottom: 8px;
  left: 8px;
  border: none;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa_claro_tag};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  width: 304px;
  height: 24px;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  position: absolute;
  bottom: 8px;
  left: 8px;
  border: none;
`;
