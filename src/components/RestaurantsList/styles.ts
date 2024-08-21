import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 120px;
  min-height: calc(100vh - 120px);
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 8px;

    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    column-gap: 40px;

    width: 90%;
    margin: 0 auto;
  }
`;
