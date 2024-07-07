import {
  TituloTag,
  Card,
  Descricao,
  Nota,
  Infos,
  TituloNota,
  TituloGlobal,
} from './styles';
import Tag from '../Tag';
import star from '../../assets/images/star.png';
import Button from '../Button';

type Props = {
  image: string;
  infos: string[];
  title: string;
  note: string;
  description: string;
};

const Product = ({ image, infos, title, note, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag size="small" key={info}>
          {info}
        </Tag>
      ))}
    </Infos>
    <TituloGlobal>
      <TituloNota>
        <TituloTag>{title}</TituloTag>
        <Nota>{note}</Nota>
      </TituloNota>
      <img src={star} className="image" alt="Estrela" />
    </TituloGlobal>
    <Descricao>{description}</Descricao>
    <Button type="link" to="/restaurants" title="Clique aqui para saber mais">
      Saiba mais
    </Button>
  </Card>
);

export default Product;
