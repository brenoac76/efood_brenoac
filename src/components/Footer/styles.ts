import styled from 'styled-components';
import { cores } from '../../styles';

export const Container = styled.footer`
  background-color: ${cores.rosa_claro_tag};
  width: 100%;
  height: 298px;
  margin-top: -240px; /* Subtraído para ajustar o espaço */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  padding-top: 40px;
`;

export const Links = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 32.5px;
  justify-content: center;
`;

export const Texto = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: ${cores.rosa};
  line-height: 11.72px;
  text-align: center;
  margin-top: 80px;
`;
