declare module 'react-input-mask' {
  import * as React from 'react';

  interface InputMaskProps extends React.InputHTMLAttributes<HTMLInputElement> {
    mask: string;
    maskChar?: string;
  }

  export default class InputMask extends React.Component<InputMaskProps> {}
}
