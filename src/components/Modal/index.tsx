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
  image: string;
  title: string;
  description: string;
  modalDescription: string;
  porcao: string;
  onClose: () => void;
};

const Modal = ({
  image,
  title,
  modalDescription,
  porcao,
  onClose,
}: ModalProps) => {
  const [mainDescription] = modalDescription.split(' Serve: ');
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
          <Button onClick={onClose}>Adicionar ao carrinho - R$ 60,90</Button>
        </DescriptionsContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
