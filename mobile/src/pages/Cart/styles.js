import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.darkSecondary};
`;

export const ProductContainer = styled.View`
  background: ${colors.white};
  border-radius: 4px;
  margin: 20px;
  padding: 0 16px;
  justify-content: center;
`;

export const ProductListItem = styled.View``;

export const ProductItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 26px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 80px;
  height: 80px;
  margin-left: 4px;
  align-items: center;
`;

export const ProductDetails = styled.View`
  flex: 1;
  padding-left: 10px;
  flex-direction: column;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 4px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const AddProduct = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  background: ${colors.grey};
  border-radius: 4px;
  padding: 6px 10px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const ProductItemControl = styled.TouchableOpacity``;

export const TextInputItem = styled.TextInput.attrs({
  editable: false,
})`
  border-radius: 4px;
  border: 1px solid #ddd;
  background: ${colors.white};
  width: 50px;
  font-size: 14px;
  padding: 0 4px;
  margin: 0 6px;
  text-align: center;
  color: ${colors.darkText};
`;

export const ProductPriceAmount = styled.Text`
  font-size: 16px;
  font-weight: bold;
  align-items: center;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const ProductTotal = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProductTotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.colorTextGrey};
`;

export const ProductTotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const ButtonOrder = styled(RectButton)`
  flex: 1;
  background: ${colors.primary};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 12px;
  padding: 12px 0;
  align-items: center;
  justify-content: center;
`;

export const ButtonOrderText = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;

export const EmptyContainer = styled.View`
  background: ${colors.white};
  border-radius: 4px;
  margin: 20px;
  padding: 30px 16px 16px;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 30px;
`;
