import Product from '../Product';
import { Container, List } from './styles';

import Food from '../../models/Food';

export type Props = {
  foods: Food[];
};

export const ProductsList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Product
            key={food.id}
            image={food.image}
            infos={food.infos}
            title={food.title}
            note={food.note}
            description={food.description}
          />
        ))}
      </List>
    </div>
  </Container>
);
