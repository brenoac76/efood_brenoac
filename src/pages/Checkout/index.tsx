import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Overlay,
  CheckoutContainer,
  Sidebar,
  InputGroup,
  Input,
  Label,
  InputRow,
  Button,
  ButtonGroup,
  StyledInputMask,
} from './styles';
import { usePostCheckoutMutation } from '../../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import { usePreviousPage } from '../../utils/PreviousPageContext';
import { open, close } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

const Checkout = () => {
  const [isPayment, setIsPayment] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [orderId, setOrderId] = useState('');
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootReducer) => state.cart);
  const { previousPage } = usePreviousPage();
  const navigate = useNavigate();
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;

  const [postCheckout] = usePostCheckoutMutation();

  const toggleCart = () => {
    if (isOpen) {
      dispatch(close());
    } else {
      dispatch(open());
    }
  };

  const handleFinalizePayment = async () => {
    const delivery = {
      receiver: formikEntrega.values.receiver,
      address: {
        description: formikEntrega.values.address,
        city: formikEntrega.values.city,
        zipCode: formikEntrega.values.cep.replace(/\D/g, ''),
        number: parseInt(formikEntrega.values.number, 10),
        complement: formikEntrega.values.complement || '',
      },
    };

    const payment = {
      card: {
        name: formikPagamento.values.cardName,
        number: formikPagamento.values.cardNumber.replace(/\s/g, ''),
        code: parseInt(formikPagamento.values.cvv, 10),
        expires: {
          month: parseInt(formikPagamento.values.expirationMonth, 10),
          year: parseInt(formikPagamento.values.expirationYear, 10),
        },
      },
    };

    const products = [
      {
        id: 1,
        price: totalPrice,
      },
    ];

    try {
      const response = await postCheckout({
        products,
        delivery,
        payment,
      }).unwrap();

      setOrderId(response.orderId);

      setIsPayment(false);
      setIsConfirmed(true);
    } catch (error) {
      console.error('Erro ao enviar dados para a API:', error);
    }
  };

  const formikEntrega = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('Este campo é obrigatório'),
      address: Yup.string().required('Este campo é obrigatório'),
      city: Yup.string().required('Este campo é obrigatório'),
      cep: Yup.string()
        .matches(/^\d{2}\.\d{3}-\d{3}$/, 'O CEP deve estar completo')
        .required('Este campo é obrigatório'),
      number: Yup.string().required('Este campo é obrigatório'),
    }),
    onSubmit: (values) => {
      if (/^\d{2}\.\d{3}-\d{3}$/.test(values.cep)) {
        setIsPayment(true);
      } else {
        formikEntrega.setFieldError(
          'cep',
          'Por favor, preencha todos os dígitos do CEP corretamente',
        );
      }
    },
  });

  const formikPagamento = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: '',
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('Este campo é obrigatório'),
      cardNumber: Yup.string()
        .required('Este campo é obrigatório')
        .test('len', 'O número do cartão deve conter 16 dígitos', (value) => {
          const cleanedValue = value ? value.replace(/\s/g, '') : '';
          return cleanedValue.length === 16;
        }),
      cvv: Yup.string()
        .required('Este campo é obrigatório')
        .matches(/^\d{3}$/, 'O CVV deve conter 3 dígitos'),
      expirationMonth: Yup.string()
        .required('Este campo é obrigatório')
        .matches(/^(0?[1-9]|1[012])$/, 'Mês de vencimento inválido'),
      expirationYear: Yup.string()
        .required('Este campo é obrigatório')
        .test(
          'valid-year',
          'O ano de vencimento deve ser igual ou superior ao ano atual',
          function (value) {
            if (!value) return false;
            const currentYear = new Date().getFullYear();
            return parseInt(value, 10) >= currentYear;
          },
        ),
    }),
    onSubmit: () => {
      console.log('Dados de pagamento antes de finalizar:', {
        cardName: formikPagamento.values.cardName,
        cardNumber: formikPagamento.values.cardNumber,
        cvv: formikPagamento.values.cvv,
        expirationMonth: formikPagamento.values.expirationMonth,
        expirationYear: formikPagamento.values.expirationYear,
      });

      handleFinalizePayment();
    },
  });

  const handleBackToCart = () => {
    navigate(previousPage);
    toggleCart();
  };

  const handleFinish = () => {
    navigate('/'); // Navega para a página inicial
  };

  return (
    <>
      <CheckoutContainer>
        <Overlay />
        <Sidebar>
          {isConfirmed ? (
            <div>
              <h3>Pedido realizado - {orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
                <br />
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
                <br />
                <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
                <br />
                <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button onClick={handleFinish}>Concluir</Button>
            </div>
          ) : isPayment ? (
            <form onSubmit={formikPagamento.handleSubmit}>
              <h3>
                Pagamento - Valor a pagar{' '}
                {totalPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </h3>
              <InputGroup>
                <Label htmlFor="cardName">Nome no cartão</Label>
                <Input
                  type="text"
                  id="cardName"
                  name="cardName"
                  onChange={formikPagamento.handleChange}
                  value={formikPagamento.values.cardName}
                  hasError={Boolean(formikPagamento.errors.cardName)}
                />
              </InputGroup>

              <InputRow>
                <InputGroup style={{ width: '228px' }}>
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <StyledInputMask
                    mask="9999 9999 9999 9999"
                    maskChar=" "
                    id="cardNumber"
                    name="cardNumber"
                    onChange={formikPagamento.handleChange}
                    value={formikPagamento.values.cardNumber}
                    hasError={Boolean(
                      formikPagamento.errors.cardNumber &&
                        formikPagamento.touched.cardNumber,
                    )}
                  />
                </InputGroup>

                <InputGroup style={{ width: '87px' }}>
                  <Label htmlFor="cvv">CVV</Label>
                  <StyledInputMask
                    mask="999"
                    maskChar=" "
                    id="cvv"
                    name="cvv"
                    onChange={formikPagamento.handleChange}
                    value={formikPagamento.values.cvv}
                    hasError={Boolean(formikPagamento.errors.cvv)}
                  />
                </InputGroup>
              </InputRow>

              <InputRow>
                <InputGroup style={{ width: '155px' }}>
                  <Label htmlFor="expirationMonth">Mês de vencimento</Label>
                  <StyledInputMask
                    mask="99"
                    maskChar=" "
                    id="expirationMonth"
                    name="expirationMonth"
                    onChange={formikPagamento.handleChange}
                    value={formikPagamento.values.expirationMonth}
                    hasError={Boolean(formikPagamento.errors.expirationMonth)}
                  />
                </InputGroup>
                <InputGroup style={{ width: '155px' }}>
                  <Label htmlFor="expirationYear">Ano de vencimento</Label>
                  <StyledInputMask
                    mask="9999"
                    maskChar=" "
                    id="expirationYear"
                    name="expirationYear"
                    onChange={formikPagamento.handleChange}
                    value={formikPagamento.values.expirationYear}
                    hasError={Boolean(formikPagamento.errors.expirationYear)}
                  />
                </InputGroup>
              </InputRow>

              <ButtonGroup>
                <Button type="submit">Finalizar pagamento</Button>
                <Button type="button" onClick={() => setIsPayment(false)}>
                  Voltar para a edição de endereço
                </Button>
              </ButtonGroup>
            </form>
          ) : (
            <form onSubmit={formikEntrega.handleSubmit}>
              <h3>Entrega</h3>
              <InputGroup>
                <Label htmlFor="receiver">Quem irá receber</Label>
                <Input
                  type="text"
                  id="receiver"
                  name="receiver"
                  onChange={formikEntrega.handleChange}
                  value={formikEntrega.values.receiver}
                  hasError={Boolean(formikEntrega.errors.receiver)}
                />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="address">Endereço</Label>
                <Input
                  type="text"
                  id="address"
                  name="address"
                  onChange={formikEntrega.handleChange}
                  value={formikEntrega.values.address}
                  hasError={Boolean(formikEntrega.errors.address)}
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="city">Cidade</Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  onChange={formikEntrega.handleChange}
                  value={formikEntrega.values.city}
                  hasError={Boolean(formikEntrega.errors.city)}
                />
              </InputGroup>
              <InputRow>
                <InputGroup style={{ width: '155px' }}>
                  <Label htmlFor="cep">CEP</Label>
                  <StyledInputMask
                    mask="99.999-999"
                    maskChar=" "
                    id="cep"
                    name="cep"
                    onChange={formikEntrega.handleChange}
                    value={formikEntrega.values.cep}
                    hasError={Boolean(formikEntrega.errors.cep)}
                  />
                </InputGroup>

                <InputGroup style={{ width: '155px' }}>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    type="text"
                    id="number"
                    name="number"
                    onChange={formikEntrega.handleChange}
                    value={formikEntrega.values.number}
                    hasError={Boolean(formikEntrega.errors.number)}
                  />
                </InputGroup>
              </InputRow>
              <InputGroup>
                <Label htmlFor="complement">Complemento (opcional)</Label>
                <Input
                  type="text"
                  id="complement"
                  name="complement"
                  onChange={formikEntrega.handleChange}
                  value={formikEntrega.values.complement}
                />
              </InputGroup>

              <ButtonGroup>
                <Button type="submit">Continuar com o pagamento</Button>
                <Button onClick={handleBackToCart}>
                  Voltar para o carrinho
                </Button>
              </ButtonGroup>
            </form>
          )}
        </Sidebar>
      </CheckoutContainer>
    </>
  );
};

export default Checkout;
