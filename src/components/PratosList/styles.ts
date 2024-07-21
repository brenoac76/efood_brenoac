import styled from 'styled-components';

export const Container = styled.div`
  padding: 336px 0;
  margin-bottom: 160px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;
  width: 100%;
  flex: 1;
  margin-bottom: -360px;
`;
