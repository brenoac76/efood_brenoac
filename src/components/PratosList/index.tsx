import { Container, List } from './styles';

import Food from '../../models/Food';
import Pratos from '../Pratos';

export type Props = {
  foods: Food[];
};

export const PratosList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.map((food) => (
          <Pratos
            key={food.id}
            image={food.image}
            title={food.title}
            description={food.description}
            modalDescription={food.modalDescription}
          />
        ))}
      </List>
    </div>
  </Container>
);
