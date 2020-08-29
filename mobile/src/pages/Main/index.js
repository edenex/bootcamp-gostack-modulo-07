import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FlatList, ScrollView } from 'react-native';

import {
  Container,
  ProductList,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
} from './styles';

function pressHandler(id) {
  console.log(id);
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          title: 'Tênis de Caminhada Leve Confortável',
          price: 179.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        },
        {
          id: 2,
          title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
          price: 139.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        },
        {
          id: 3,
          title: 'Tênis Adidas Duramo Lite 2.0',
          price: 219.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
        },
        {
          id: 5,
          title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
          price: 139.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
        },
        {
          id: 6,
          title: 'Tênis Adidas Duramo Lite 2.0',
          price: 219.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
        },
        {
          id: 4,
          title: 'Tênis de Caminhada Leve Confortável',
          price: 179.9,
          image:
            'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        },
      ],
    };
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ScrollView onPress={() => pressHandler(item.id)}>
              <ProductList>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.price}</ProductPrice>
                <AddButton>
                  <ProductAmount>
                    <Icon name="add-shopping-cart" color="#fff" size={16} />
                    <ProductAmountText>1</ProductAmountText>
                  </ProductAmount>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </ProductList>
            </ScrollView>
          )}
        />
      </Container>
    );
  }
}

export default Main;
