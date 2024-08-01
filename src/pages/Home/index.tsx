import { RestaurantsList } from '../../components/RestaurantsList';
import Hero from '../../components/Hero';
import { useGetFeaturedFoodQuery } from '../../services/api';

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
  const { data: restaurantes = [], isLoading } = useGetFeaturedFoodQuery();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Hero />
      <RestaurantsList foods={restaurantes as Food[]} />
    </>
  );
};

export default Home;
