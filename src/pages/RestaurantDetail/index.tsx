import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Food } from '../Home';
import PratosList from '../../components/PratosList';
import Hero2 from '../../components/Hero2';

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurante, setRestaurante] = useState<Food | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data));
  }, [id]);

  if (!restaurante) {
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
