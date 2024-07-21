import { Food } from '../../pages/Home';
import Product from '../Restaurants';

import { Container, List } from './styles';

export type Props = {
  foods: Food[];
};

export const RestaurantsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            image={food.capa}
            infos={food.tipo}
            title={food.titulo}
            note={food.avaliacao}
            description={food.descricao}
            id={food.id}
          />
        ))}
      </List>
    </div>
  </Container>
);
