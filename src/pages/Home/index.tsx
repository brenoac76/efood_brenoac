import { RestaurantsList } from '../../components/RestaurantsList';
import Hero from '../../components/Hero';
import { useEffect, useState } from 'react';

export type Food = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: {
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  }[];
};

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Food[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantes(data));
  }, []);

  return (
    <>
      <Hero />
      <RestaurantsList foods={restaurantes} />{' '}
    </>
  );
};

export default Home;
