import Hero2 from '../../components/Hero2';
import PratosList from '../../components/PratosList';
import { useGetFeaturedFoodQuery } from '../../services/api';
import { Food } from '../Home';

const Restaurants = () => {
  const { data: pratos = [], isLoading } = useGetFeaturedFoodQuery();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Hero2 capa={''} tipo={''} titulo={''} />
      <PratosList foods={pratos as Food[]} />
    </>
  );
};

export default Restaurants;
