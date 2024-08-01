import { Imagem, LogoContainer, Apresenta, Titulo, CartButton } from './styles';
import logo from '../../assets/images/logo.png';
import heroImg from '../../assets/images/fundo.png';
import { useNavigate } from 'react-router-dom';
import { open, close } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

type Hero2Props = {
  capa: string;
  tipo: string;
  titulo: string;
};

const Hero2 = ({ capa, tipo, titulo }: Hero2Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleCart = () => {
    if (isOpen) {
      dispatch(close());
    } else {
      dispatch(open());
    }
  };

  const getCartItemCount = () => {
    return items.reduce(
      (total: number, item: { quantity: number }) => total + item.quantity,
      0,
    );
  };

  return (
    <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
      <LogoContainer>
        <img onClick={handleLogoClick} src={logo} alt="EFOOD" />
      </LogoContainer>
      <Titulo>
        <p>Restaurantes</p>
        <CartButton onClick={toggleCart}>
          {getCartItemCount()} produto(s) no carrinho
        </CartButton>
      </Titulo>
      <Apresenta>
        <img src={capa} alt="Apresentação" />
        <div className="text-wrapper">
          <div className="text-italiana">{tipo}</div>
          <div className="text-dolceVita">{titulo}</div>
        </div>
      </Apresenta>
    </Imagem>
  );
};

export default Hero2;
