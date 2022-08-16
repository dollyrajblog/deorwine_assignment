import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {add, sub} from '../store/action';
import styled from 'styled-components/native';
const {height, width} = Dimensions.get('screen');
// =========USE STYLE COMPONENTS=============
const Safearea = styled.SafeAreaView`
  flex: 1;
`;
const Container = styled.View`
  flex: 1;
  background-color: #021414;
  align-items: center;
`;
const Textdata = styled.Text`
  font-size: 35px;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  text-decoration: underline;
`;
const Container2 = styled.View`
  flex: 1;
  justify-content: center;
`;
const Container3 = styled.View`
  height: 40%;
  justify-content: space-between;
`;
const Touchable = styled.TouchableOpacity`
  height: 50px;
  width: 130px;
  background-color: white;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
const Textdata1 = styled.Text`
  font-size: 20px;
  color: black;
  font-weight: 500;
`;
const Textdata2 = styled.Text`
  font-size: 30px;
  color: #246e6b;
  font-weight: bold;
  align-self: center;
`;
// ======== MAIN CODE ===========
const Counter_Screen = () => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <Safearea>
      <Container>
        <Textdata>Counter</Textdata>
        <Container2>
          <Container3>
            <Touchable onPress={() => dispatch(sub())}>
              <Textdata1>-1</Textdata1>
            </Touchable>
            <Textdata2>{data}</Textdata2>
            <Touchable onPress={() => dispatch(add())}>
              <Textdata1>+1</Textdata1>
            </Touchable>
          </Container3>
        </Container2>
      </Container>
    </Safearea>
  );
};
export default Counter_Screen;
