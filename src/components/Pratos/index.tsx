import React, { useState } from 'react';
import {
  TituloTag,
  Card,
  Descricao,
  TituloNota,
  TituloGlobal,
  ImgContainer,
} from './styles';
import ButtonPratos from '../ButtonPratos';
import Modal from '../Modal';

type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
  modalDescription: string;
  porcao: string;
  preco: number;
};

const Pratos = ({
  id,
  image,
  title,
  description,
  modalDescription,
  porcao,
  preco,
}: Props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card>
        <ImgContainer src={image} alt={title} />
        <TituloGlobal>
          <TituloNota>
            <TituloTag>{title}</TituloTag>
          </TituloNota>
        </TituloGlobal>
        <Descricao>{description}</Descricao>
        <ButtonPratos
          type="button"
          title="Adicionar ao carrinho"
          onClick={handleOpenModal}
        >
          Adicionar ao carrinho
        </ButtonPratos>
      </Card>
      {isModalOpen && (
        <Modal
          id={id}
          image={image}
          title={title}
          description={modalDescription}
          onClose={handleCloseModal}
          modalDescription={modalDescription}
          porcao={porcao}
          preco={preco}
        />
      )}
    </>
  );
};

export default Pratos;
