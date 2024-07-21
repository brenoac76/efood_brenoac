import { Imagem, LogoContainer, Apresenta, Titulo } from './styles';
import logo from '../../assets/images/logo.png';
import heroImg from '../../assets/images/fundo.png';

type Hero2Props = {
  capa: string;
  tipo: string;
  titulo: string;
};

const Hero2 = ({ capa, tipo, titulo }: Hero2Props) => (
  <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
    <LogoContainer>
      <img src={logo} alt="EFOOD" />
    </LogoContainer>
    <Titulo>
      <p>Restaurantes</p>
      <p>0 produto(s) no carrinho</p>
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

export default Hero2;
