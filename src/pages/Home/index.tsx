import Food from '../../models/Food';
import { ProductsList } from '../../components/ProductsList';
import Hero from '../../components/Hero';

import sushi from '../../assets/images/sushi.png';
import pasta from '../../assets/images/pasta.png';

const pratos: Food[] = [
  {
    id: 1,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    modalDescription: '',
  },
  {
    id: 2,
    image: pasta,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    modalDescription: '',
  },
  {
    id: 3,
    image: pasta,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    modalDescription: '',
  },
  {
    id: 4,
    image: pasta,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    modalDescription: '',
  },
  {
    id: 5,
    image: pasta,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    modalDescription: '',
  },
  {
    id: 6,
    image: pasta,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    note: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    modalDescription: '',
  },
];

const Home = () => (
  <>
    <Hero />
    <ProductsList foods={pratos} />
  </>
);

export default Home;
