import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Button,
  CartItem,
  CartItemContainer,
} from './styles';

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(close());
  };

  const handleRemoveItem = (id: number) => {
    dispatch(remove(id));
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={handleCloseCart} />
        <Sidebar>
          <ul>
            {items.map((item) => (
              <CartItemContainer key={item.id}>
                <CartItem>
                  <img src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    <span>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item.id)}
                  />
                </CartItem>
              </CartItemContainer>
            ))}
          </ul>
          <Prices>
            Valor total
            <span>
              {totalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </Prices>
          <Button
            title="Clique aqui para continuar para a entrega"
            type="button"
          >
            Continuar com a entrega
          </Button>
        </Sidebar>
      </CartContainer>
    </>
  );
};

export default Cart;
