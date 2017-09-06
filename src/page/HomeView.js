import React, { Component } from 'react';
import ReactNative from 'react-native';
import { StackNavigator,TabNavigator,TabBarTop,TabBarBottom } from 'react-navigation';

class One extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#E6ACAE',alignItems:'center',justifyContent:'center', }}>
                <Text>One</Text>
            </View>
        );
    }
}
class Two extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#AEDFA3',alignItems:'center',justifyContent:'center',}}>
                <Text>Two</Text>
            </View>
        );
    }
}
class Three extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F3D0A7',alignItems:'center',justifyContent:'center',}}>
                <Text>Three</Text>
            </View>
        );
    }
}
class Four extends Component {
    static navigationOptions = { tabBarLabel:"四" };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#A5D9EA',alignItems:'center',justifyContent:'center',}}>
                <Text>Four</Text>
            </View>
        );
    }
}
const OPTION = {
    tabBarPosition:'top',
    tabBarComponent:TabBarTop,
    swipeEnabled:false,
    animationEnabled:false,
    lazy:true,
    backBehavior:'none',
    ...TabNavigator.Presets.AndroidTopTabs,
    tabBarOptions: {
        activeTintColor: '#188eee',
        inactiveTintColor:'#000',
        showIcon:false,
        scrollEnabled:false,
        showLabel:true,
        indicatorStyle:{
            height:2.5,
            backgroundColor:"#5B9EE7",
            padding:0,
            margin:0,
        },
        labelStyle:{
            padding:0,
            margin:0,
        },
        tabStyle:{
            padding:0,
            margin:0,
            height:50
        },
        style: {
            height:50,
            backgroundColor:'#fff'
        },
    }
};
 const ScrollTopTableView = TabNavigator({
    One: { screen: One,navigationOptions:{tabBarLabel:"一"}},
    Two: { screen: Two,navigationOptions:{tabBarLabel:"二"}},
    Three: { screen: Three,navigationOptions:{tabBarLabel:"三"}},
    Four: { screen: Four,navigationOptions:{tabBarLabel:"四"}},
},OPTION);
const {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    SectionList,
    TouchableWithoutFeedback
} = ReactNative;
export default class HomeView extends Component {
    static navigationOptions = { headerTitle: '首页' }
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollTopTableView/>
            </View>
        );
    }
}
