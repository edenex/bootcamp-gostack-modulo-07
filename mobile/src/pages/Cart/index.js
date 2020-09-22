import React from 'react';
import { ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
import colors from '../../styles/colors';

import {
  Container,
  ProductContainer,
  ProductListItem,
  ProductItem,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ButtonDelete,
  ProductAmount,
  AddProduct,
  ProductItemControl,
  TextInputItem,
  ProductPriceAmount,
  ProductTotal,
  ProductTotalText,
  ProductTotalPrice,
  TotalContainer,
  ButtonOrder,
  ButtonOrderText,
  EmptyContainer,
  EmptyText,
} from './styles';

export default function Cart() {
  const total = useSelector((state) =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const products = useSelector((state) =>
    state.cart.map((product) => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        {products.length ? (
          <>
            <ProductContainer>
              {products.map((product) => (
                <ProductListItem key={product.id}>
                  <ProductItem>
                    <ProductImage source={{ uri: product.image }} />
                    <ProductDetails>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                    </ProductDetails>
                    <ButtonDelete
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <Icon
                        name="delete-forever"
                        color={colors.primary}
                        size={24}
                      />
                    </ButtonDelete>
                  </ProductItem>
                  <ProductAmount>
                    <AddProduct>
                      <ProductItemControl onPress={() => decrement(product)}>
                        <Icon
                          name="remove-circle-outline"
                          color={colors.primary}
                          size={22}
                        />
                      </ProductItemControl>
                      <TextInputItem value={String(product.amount)} />
                      <ProductItemControl onPress={() => increment(product)}>
                        <Icon
                          name="add-circle-outline"
                          color={colors.primary}
                          size={22}
                        />
                      </ProductItemControl>
                    </AddProduct>
                    <ProductPriceAmount>{product.subtotal}</ProductPriceAmount>
                  </ProductAmount>
                </ProductListItem>
              ))}
              <TotalContainer>
                <ProductTotal>
                  <ProductTotalText>TOTAL</ProductTotalText>
                  <ProductTotalPrice>{total}</ProductTotalPrice>
                </ProductTotal>
                <ButtonOrder>
                  <ButtonOrderText>FINALIZAR PEDIDO</ButtonOrderText>
                </ButtonOrder>
              </TotalContainer>
            </ProductContainer>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" color={colors.grey} size={80} />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyContainer>
        )}
      </ScrollView>
    </Container>
  );
}
