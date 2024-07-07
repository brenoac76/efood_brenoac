import logo from '../../assets/images/logo.png'
import face from '../../assets/images/facebook.png'
import twiter from '../../assets/images/twitter.png'
import insta from '../../assets/images/Insta.png' 
import { Container, Links, Logo, Texto } from './styles'



const Footer = () => (
    <Container>
        <div>
        <Logo>
            <img src={logo} alt="EFOOD" />
        </Logo>
        <Links>
        <img src={insta} alt="INSTAGRAM" />
        <img src={face} alt="FACEBOOK" />
        <img src={twiter} alt="TWITER" />
        </Links>
        <Texto>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. 
        </Texto>

        </div>
    </Container>
)  

export default Footer
    




