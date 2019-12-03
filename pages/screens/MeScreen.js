import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class MeScreen extends Component {
  static options() {
    return {
      topBar:{
        visible: false,
      }
    };
}
  constructor(props){
    super(props);
    Navigation.events().bindComponent(this);
  }
  componentDidMount(){

  }
  _navgationToDetail = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: 'app.SettingScreen',
        options: {
          bottomTabs: {
            visible: false,
          },
          topBar:{
            background: {
              color: 'red'
            },
          }
        }
      }
    });
  }
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.bigBlue}>个人中心</Text>
        <Button
          title="Go to Settings"
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
