import Hero2 from '../../components/Hero2';
import { useEffect, useState } from 'react';
import { Food } from '../Home';
import PratosList from '../../components/PratosList';

const Restaurants = () => {
  const [pratos, setPratos] = useState<Food[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setPratos(data));
  }, []);

  return (
    <>
      <Hero2 capa={''} tipo={''} titulo={''} />
      <PratosList foods={pratos} />
    </>
  );
};

export default Restaurants;
