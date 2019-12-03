# react-native

*react-native-cli: 2.0.1*
*react-native 0.61.5*
*react-native-navigation: 3.7.0*

## 安装脚手架
执行一次，之后不用再执行
```
npm install -g yarn react-native-cli

```
 
## 创建项目
```
react-native init AwesomeProject

```
指定react-native版本,*注意版本号必须精确到两个小数点*
```
react-native init MyApp --version 0.44.3
```
## 编译并运行
```
react-native run-ios

```
## 运行pods时，Specs无法下载
切换下载源，在podfile顶部添加如下：
```
source 'https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git'
```
## 运行pods时，boost库无法下载
切换下载源，例如：将源切换至gitee.com，或下载该源上传到其他代码管理平台
```
pod 'boost-for-react-native',:git=>"https://gitee.com/damon-s/boost-for-react-native.git"
```
## 添加React Native Navigation
```
npm install --save react-native-navigation

```
在iOS的项目中打开podfile文件，添加：
```
pod 'ReactNativeNavigation', :podspec => '../node_modules/react-native-navigation/ReactNativeNavigation.podspec'
```
修改AppDelegate.h文件，去掉RCTBridgeDelegate:
```
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (nonatomic, strong) UIWindow *window;

@end
```
修改AppDelegate.m文件,导入：
```
#import <ReactNativeNavigation/ReactNativeNavigation.h>
```
修改didFinishLaunchingWithOptions方法：
```
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  [ReactNativeNavigation bootstrap:jsCodeLocation launchOptions:launchOptions];
  
  return YES;
}

```

## 添加async-storage
以前我们都从react-native中导入AsyncStorage，但是React官方说是要讲这个AsyncStorage从react-native中抽取出来，也就是在以后的版本中会将其从react-native包中删除，其建议我们从@react-native-community/async-storage中导入这个组件
```
yarn add @react-native-community/async-storage
```
关联react-native原生代码
```
react-native link @react-native-community/async-storage
```


