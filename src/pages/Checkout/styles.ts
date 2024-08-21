import styled from 'styled-components';
import { cores } from '../../styles';
import InputMask from 'react-input-mask';

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

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 360px;
  max-height: 1624px;
  width: 100%;
  height: 100%;
  display: flex;
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
  width: 360px;
  h3 {
    color: ${cores.rosa_claro_tag};
    margin-bottom: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${cores.rosa_claro_tag};
    margin-bottom: 24px;
  }
`;

export const Button = styled.button`
  width: 344px;
  height: 24px;
  margin-bottom: 8px;
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

export const InputGroup = styled.div`
  margin-bottom: 8px;
`;

export const Label = styled.label`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
  color: ${cores.rosa_claro_tag};
`;

export const Input = styled.input<{ hasError?: boolean }>`
  max-width: 344px;
  height: 32px;
  width: 100%;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  color: ${cores.cinza_input};
  border: 1px solid ${(props) => (props.hasError ? '#FFFF00' : 'transparent')};
  background-color: ${cores.rosa_claro_tag};

  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#FFFF00' : '')};
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const ButtonGroup = styled.div`
  margin-top: 24px;
`;

export const StyledInputMask = styled(InputMask)<{ hasError?: boolean }>`
  max-width: 344px;
  height: 32px;
  width: 100%;
  padding: 8px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  color: ${cores.cinza_input};
  border: 1px solid ${(props) => (props.hasError ? '#FFFF00' : 'transparent')};
  background-color: ${cores.rosa_claro_tag};

  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? '#FFFF00' : '')};
  }
`;

export const ErrorMessage = styled.div`
  color: ${cores.rosa_claro_tag};
  font-size: 0.75rem;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.25rem;
  overflow: hidden;
`;
