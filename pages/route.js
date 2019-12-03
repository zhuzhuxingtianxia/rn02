import { Navigation } from 'react-native-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import Umlogin from './screens/Umlogin';
import HomeScreen from './screens/HomeScreen';
import MeScreen from './screens/MeScreen';
import DetailScreen from './screens/DetailScreen';
import SettingScreen from './screens/SettingScreen';

// register all screens of the app (including internal ones)
function registerComponents(tag, components) {
  components.forEach(item => {
    Navigation.registerComponent(tag + '.' + item.name, () => item)
  })
}

export function registerScreens() {
  const components = [
    WelcomeScreen,
    Umlogin,
    SettingScreen,

    HomeScreen,
    MeScreen,
    DetailScreen
  ];
  registerComponents('app',components)
}
export const loginRoot = ()=>{
  Navigation.setRoot({
    root:{
      stack: {
        children: [{
          component: {
            name: "app.Umlogin"
          }
        }],
        options:{
          topBar:{
            visible: false,
          } 
        }
      }
    }
  })
}

export const homeRoot= ()=>{
  const tab1children = [{
    component: {
      name: 'app.HomeScreen',
      passProps: {
        text: 'This is tab 1'
      }
    }
  }]
  const tab1 = {
    stack:{
      children:tab1children,
      options: {
        bottomTab: {
          text: '首页',
          selectedTextColor: 'red',
          icon: require('./imgs/tabbar/home.png'),
          selectedIcon: require('./imgs/tabbar/home_press.png'), // iOS only
        },
        topBar: {
          visible: true,
          title: {
            text: 'Home',
            color: '#fff',
            fontWeight:'bold',
            fontSize: 18,
          },
          background: {
            color: 'red'
          }
        }    
      }
    }
  }
  
  const tab2children = [{
    component: {
      name: 'app.MeScreen',
      passProps: {
        text: 'This is tab 1'
      }
    }
  }]
  
  const tab2 = {
    stack:{
      children:tab2children,
      options: {
        bottomTab: {
          text: '我的',
          selectedTextColor: 'red',
          icon: require('./imgs/tabbar/mine.png'),
          selectedIcon: require('./imgs/tabbar/mine_press.png'), // iOS only
        },
        topBar:{
          visible: true,
          background: {
            color: 'red'
          },
          backButton: {
            id: 'backPress',
            icon: require('./imgs/back_9x16.png'),
            visible: true,
            color: '#fff',
          },
        }     
      }
    }
  }
  
  const bottomTabs = {
    bottomTabs:{
      children:[tab1,tab2],
      options: {}
    }
  }
  Navigation.setRoot({
    root:bottomTabs
  })
}

/*
module.exports：
等同于每个模块头部有这样的一行代码：var exports = module.exports 可用于设置全局变量和函数；
export与export default均可用于导出常量/函数/文件/模块等；
在一个文件或模块中，export/import可以有多个，export default只有一个；
通过export方式导出，在导入时需要加{}，export default不需要；
export能导出变量/表达式，export default不可以。
*/ 
/*
module.exports = {
  registerScreens,
  loginRoot,
  homeRoot
}*/