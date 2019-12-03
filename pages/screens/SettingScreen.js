import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { loginRoot } from '../route';

export default class SettingScreen extends Component {
	static options() {
			return {
				topBar: {
					title: {
						text: '设置界面',
						color: '#fff',
						fontWeight:'bold',
						fontSize: 18,
					},
				}
			};
	}
  constructor(props){
    super(props);
  }
  componentDidMount(){

  }
  onLoginOut= async ()=>{
    try {
      await AsyncStorage.removeItem('userToken');
      loginRoot()
    } catch (error) {
      
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.bigBlue}>设置界面</Text>
        <TouchableHighlight onPress={this.onLoginOut} style={styles.button} underlayColor='#f0f0f0'>
						<Text style={styles.buttonText}>退出登陆</Text>
					</TouchableHighlight>
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
  },
  button: {
		width:'80%',
		height:40,
		marginTop:20,
		marginBottom:30,
		borderRadius:20,
		borderWidth:1,
		borderColor:'#eb5400',
		flexDirection:'row',
		justifyContent:"center",
		alignItems:"center"
	},
	buttonText: {
		fontSize:14,
		fontWeight:'bold',
		color:'#eb5400'
	}
});
