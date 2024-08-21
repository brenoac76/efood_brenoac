import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Food } from '../pages/Home';

export interface CheckoutResponse {
  orderId: string;
}

export interface CheckoutPayload {
  products: Array<{
    id: number;
    price: number;
  }>;
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getFeaturedFood: builder.query<Food, void>({
      query: () => 'restaurantes',
    }),
    postCheckout: builder.mutation<CheckoutResponse, CheckoutPayload>({
      query: (payload) => ({
        url: 'checkout',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useGetFeaturedFoodQuery, usePostCheckoutMutation } = api;

export default api;
