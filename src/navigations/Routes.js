import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Counter_Screen} from "../Screens/index"
import { Provider } from 'react-redux'
import { store } from '../store/store'
const Routes = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={store}>
      <Counter_Screen/>
      </Provider>
    </View>
  )
}

export default Routes

const styles = StyleSheet.create({})
