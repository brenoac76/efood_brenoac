import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slide, toast } from 'react-toastify';

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex > -1) {
        toast.warn('Prato já adicionado ao carrinho', {
          position: 'top-right',
          transition: Slide,
          autoClose: 500,
        });
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast.success('Prato adicionado ao carrinho', {
          position: 'top-right',
          transition: Slide,
          autoClose: 500,
        });
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    close: (state) => {
      state.isOpen = false;
    },
    open: (state) => {
      state.isOpen = true;
    },
  },
});

export const { addToCart, remove, close, open } = cartSlice.actions;
export default cartSlice.reducer;
