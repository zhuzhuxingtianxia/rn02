import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { DeviceEventEmitter } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DetailScreen extends Component {
  static options() {
    return {
      _statusBar: {
        backgroundColor: 'transparent',
        style: 'dark',
        drawBehind: true
      },
      topBar: {
        title: {
          text: '详情',
          color: '#fff',
          fontWeight:'bold',
          fontSize: 18,
				},
				backButton: {
          id: 'backPress',
          icon: require('../imgs/back_9x16.png'),
          visible: true,
          color: '#fff',
        },
        largeTitle: {
          visible: false,
        },
        drawBehind: true,
        visible: true,
        animate: false
      }
    };
  }
  constructor(props){
    super(props);
    Navigation.events().bindComponent(this);
    this.state = {text: 'nothing'};
  }
  componentDidAppear(parameter) {
    console.log('Parameter:',parameter)
    this.setState({text: JSON.stringify(parameter.passProps)})
  }
  componentDidMount(){

  }
  _navgationPop = ()=> {
    //通知传值
    DeviceEventEmitter.emit('returnData',{id:'通知传参'});
    Navigation.pop(this.props.componentId);
  }
  _navgationPopCallBack = ()=> {
    //回调传值
    this.props.callback('回调传参')
    Navigation.pop(this.props.componentId);
  }
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.bigBlue}>DetailScreen</Text>
        <Text>{this.state.text}</Text>
        <Button
          title="返回上个界面发通知"
          onPress={this._navgationPop}
        />
        <Button
          title="返回上个界面回调函数传参"
          onPress={this._navgationPopCallBack}
        />
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
