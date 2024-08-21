import styled from 'styled-components';

export const Container = styled.div`
  padding: 336px 0;
  margin-bottom: 160px;

  @media (max-width: 768px) {
    padding: 336px 0;
    margin-bottom: 8px;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 32px;
  width: 100%;
  flex: 1;
  margin-bottom: -360px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 12px;

    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    column-gap: 50px;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    margin: 0 auto;
  }
`;
