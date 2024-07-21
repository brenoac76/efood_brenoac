import {
  TituloTag,
  Card,
  Descricao,
  Nota,
  Infos,
  TituloNota,
  TituloGlobal,
  ImgContainer,
  Button as StyledButton,
} from './styles';
import Tag from '../Tag';
import Button from '../Button';
import { Link } from 'react-router-dom';
import star from '../../assets/images/star.png';

type Props = {
  image: string;
  infos: string;
  title: string;
  note: number;
  description: string;
  id: number;
};

const Product = ({ image, infos, title, note, description, id }: Props) => {
  return (
    <Card>
      <ImgContainer src={image} alt={title} />
      <Infos>
        <Tag>{infos}</Tag>
      </Infos>
      <TituloGlobal>
        <TituloNota>
          <TituloTag>{title}</TituloTag>
          <Nota>{note}</Nota>
        </TituloNota>
        <img src={star} className="image" alt="Estrela" />
      </TituloGlobal>
      <Descricao>{description}</Descricao>
      <StyledButton>
        <Link to={`/restaurant/${id}`}>
          <Button type="button" title="Clique aqui para saber mais">
            Saiba mais
          </Button>
        </Link>
      </StyledButton>
    </Card>
  );
};

export default Product;
