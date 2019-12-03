import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View } from 'react-native';
import { homeRoot,loginRoot } from '../route';

export default class WelcomeScreen extends Component {
  constructor(props){
    super(props);
    // Navigation.events().bindComponent(this);
  }
  componentDidMount(){
    this._bootstrapAsync();
  }
  _bootstrapAsync = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log('userToken:',userToken)
      if(userToken){
        homeRoot()
      }else{
        loginRoot()
      }
    } catch (error) {
      
    }
    
  };

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.bigBlue}>欢迎使用</Text>
        <Text style={styles.bigBlue}>react-native-navigation</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});

