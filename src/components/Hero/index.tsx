import { Imagem, LogoContainer, Titulo } from './styles';

import heroImg from '../../assets/images/fundo.png';
import logo from '../../assets/images/logo.png';

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${heroImg})` }}>
    <LogoContainer>
      <img src={logo} alt="EFOOD" />
    </LogoContainer>
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </Imagem>
);

export default Hero;
