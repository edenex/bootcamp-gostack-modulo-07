import styled from 'styled-components/native';
import colors from '../../styles/colors';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.SafeAreaView`
  background: ${colors.darkPrimary};
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  flex: 1;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  top: -8px;
  right: -8px;
  border-radius: 9px;
  background: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  font-size: 12px;
  overflow: hidden;
`;
