import { useDispatch } from 'react-redux';
import { addToCart as add, open } from '../../store/reducers/cart';

import {
  Overlay,
  ModalContainer,
  ImgContainer,
  Title,
  Description,
  Button,
  DescriptionsContainer,
} from './styles';

type ModalProps = {
  id: number;
  image: string;
  title: string;
  description: string;
  modalDescription: string;
  porcao: string;
  preco: number;
  onClose: () => void;
};

const Modal = ({
  id,
  image,
  title,
  modalDescription,
  porcao,
  preco,
  onClose,
}: ModalProps) => {
  const dispatch = useDispatch();
  const [mainDescription] = modalDescription.split(' Serve: ');

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  const handleAddToCart = () => {
    const product = {
      id,
      title,
      description: mainDescription,
      price: preco,
      image,
      quantity: 1,
    };
    dispatch(add(product));
    dispatch(open());
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContainer
        onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
      >
        <ImgContainer src={image} alt={title} />
        <DescriptionsContainer>
          <Title>{title}</Title>
          <Description>
            {mainDescription}
            <div>{porcao && `Serve: ${porcao}`}</div>
          </Description>
          <Button
            type="button"
            title="Adicionar ao carrinho"
            onClick={handleAddToCart}
          >
            Adicionar ao carrinho - {formatPrice(preco)}
          </Button>
        </DescriptionsContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
