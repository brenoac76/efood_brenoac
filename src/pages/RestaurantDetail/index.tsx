import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Food } from '../Home';
import PratosList from '../../components/PratosList';
import Hero2 from '../../components/Hero2';
import { useGetFeaturedFoodQuery } from '../../services/api';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: restaurantes = [], isLoading } = useGetFeaturedFoodQuery();
  const [restaurante, setRestaurante] = useState<Food | null>(null);

  useEffect(() => {
    if (Array.isArray(restaurantes)) {
      const selectedRestaurant = restaurantes.find(
        (rest: Food) => rest.id.toString() === id,
      );
      setRestaurante(selectedRestaurant || null);
    }
  }, [restaurantes, id]);

  if (isLoading || !restaurante) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <Hero2
        capa={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <PratosList foods={[restaurante]} />
    </div>
  );
};

export default RestaurantDetail;
