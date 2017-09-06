
import React from 'react';
import ReactNative from 'react-native';
import { StackNavigator,TabNavigator,TabBarTop,TabBarBottom } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import App from '../containers/App';
import Detail from '../containers/Detail';
import HomeView from '../page/HomeView';
import MessView from '../page/MessView';
import UserView from '../page/UserView';

const { StyleSheet,View,Text } = ReactNative;
const headerOptions = {
    headerStyle: { backgroundColor: '#fff' },
    headerTitleStyle: { color: '#333', alignSelf: 'center' },
    headerTintColor: '#999',
    headerBackTitle: null,
    headerRight: <View style={{ width: 25 }}/>
};
const OPTION = {
    tabBarOptions: {
        activeTintColor: '#188eee',
        inactiveTintColor:'#7A7E83',
        indicatorStyle:{height:0},
        lazy:true,
        showIcon:true,
        showLabel:true,
        upperCaseLabel:false,
        scrollEnabled:false,
        labelStyle:{
            margin:0,
            fontSize:12.5,
        },
        iconStyle:{
            margin:0,
        },
        style: {
            backgroundColor:'#F6F6F6',
            borderColor:'#ccc',
        },
    },
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:false,
    backBehavior:"none",
}
const TabOptions = (tabBarTitle,iconname) => {
    const tabBarLabel = tabBarTitle;
    const headerTitleStyle = { alignSelf:'center',color:'#fff',fontSize:17,fontWeight:'500'};
    const headerStyle = {backgroundColor:'#188eee',};
    const tabBarIcon = (({ tintColor, focused }) => {
            let color = focused? '#188eee' : '#ccc';
            return <Icon name={iconname} size={22} color={color}/>
        });
    return {tabBarLabel,tabBarIcon,headerTitleStyle,headerStyle}
};

const Main = TabNavigator({
    Home: {screen: HomeView,navigationOptions: ()=>TabOptions('主页',"home",)},
    Mess: {screen: MessView,navigationOptions: ()=>TabOptions('消息',"comment-processing",)},
    User: {screen: UserView,navigationOptions: ()=>TabOptions('我的',"account-settings",)},
},OPTION);

const Routers = StackNavigator({
    Main: { screen: Main },
    App: { screen: App, navigationOptions: { ...headerOptions }},
    Detail: { screen: Detail, navigationOptions: { ...headerOptions }},
}, {
    headerMode: 'screen',
    transitionConfig: () => ({
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })
});

export default Routers;





