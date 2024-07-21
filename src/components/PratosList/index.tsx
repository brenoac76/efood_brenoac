import { Container, List } from './styles';
import Pratos from '../Pratos';
import { Food } from '../../pages/Home';

export type Props = {
  foods: Food[];
};

const PratosList = ({ foods }: Props) => (
  <Container>
    <div className="container">
      <List>
        {foods.flatMap((food) =>
          food.cardapio.map((item) => (
            <Pratos
              key={item.id}
              image={item.foto}
              title={item.nome}
              description={item.descricao}
              modalDescription={item.descricao}
              porcao={item.porcao}
            />
          )),
        )}
      </List>
    </div>
  </Container>
);

export default PratosList;
