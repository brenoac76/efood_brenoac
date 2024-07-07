import { ButtonContainer, ButtonLink } from './styles';

type Props = {
  type: 'button' | 'link';
  title: string;
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ type, title, to, onClick, children }) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  );
};

export default Button;
