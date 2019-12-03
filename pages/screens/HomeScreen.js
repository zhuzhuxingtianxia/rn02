import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { DeviceEventEmitter } from 'react-native';
import { StyleSheet, Alert, Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  static options() {
    return {
      _statusBar: {
        backgroundColor: 'transparent',
        style: 'dark',
        drawBehind: true
      },
      topBar: {
        background: {
          color: 'red'
        },
        title: {
          text: '首页界面',
          color: '#fff',
          fontWeight:'bold',
          fontSize: 18,
        },
        rightButtons: {
          id: 'singleBtn',
          text: 'single',
          color: '#fff',
          fontWeight:'bold',
          fontSize: 18,
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
    this.state = {
      text: 'nothing yet'
    };
  }
  componentDidAppear(parameter) {
    console.log('Parameter:',parameter)
    this.setState({ text: 'componentDidAppear' });
  }

  componentDidDisappear() {
    console.log('componentDidDisappear')
  }
  componentDidMount(){
    DeviceEventEmitter.addListener("returnData", (params) => {
      Alert.alert('返回值：'+ JSON.stringify(params));
    })
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  _navgationToDetail = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'app.DetailScreen',
        options: {
          bottomTabs: {
            visible: false
          }
        },
        passProps:{
          canshu:'参数',
          callback:(pp) => {
            alert(JSON.stringify(pp))
          }
        }
      }
    });
  }
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.bigBlue}>HomeScreen</Text>
        <Text style={styles.bigBlue}>{this.state.text}</Text>
        <Button
          title="Go to Details"
          onPress={this._navgationToDetail}
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
