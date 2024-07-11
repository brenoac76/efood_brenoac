import { Imagem, LogoContainer, Apresenta, Titulo } from './styles';
import heroImg from '../../assets/images/fundo.png';
import logo from '../../assets/images/logo.png';
import apresentacao from '../../assets/images/apresentacao.png';

const Hero2 = () => (
  <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
    <LogoContainer>
      <img src={logo} alt="EFOOD" />
    </LogoContainer>
    <Titulo>
      <p>Restaurantes</p>
      <p>0 produto(s) no carrinho</p>
    </Titulo>
    <Apresenta>
      <img src={apresentacao} alt="Apresentação" />
      <div className="text-wrapper">
        <div className="text-italiana">italiana</div>
        <div className="text-dolceVita">La Dolce Vita Trattoria</div>
      </div>
    </Apresenta>
  </Imagem>
);

export default Hero2;
