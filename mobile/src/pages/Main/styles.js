import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${colors.darkSecondary};
  align-items: center;
`;

export const ProductList = styled.View`
  background: ${colors.white};
  border-radius: 8px;
  width: 260px;
  height: 440px;
  padding: 16px;
  margin: 16px 8px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-size: 18px;
  color: ${colors.darkText};
`;

export const ProductPrice = styled.Text`
  margin: 12px 0;
  font-size: 22px;
  color: ${colors.dark};
  font-weight: bold;
  margin-bottom: 14px;
`;

export const AddButton = styled(RectButton)`
  background: ${colors.primary};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 14px;
  flex-direction: row;
  background: ${darken(0.03, colors.primary)};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: ${colors.white};
  margin: 0 4px 0 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
