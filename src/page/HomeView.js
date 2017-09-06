import React, { Component } from 'react';
import ReactNative from 'react-native';
import { ScrollTopTableView } from '../routers';
import { StackNavigator,TabNavigator,TabBarTop,TabBarBottom } from 'react-navigation';
const { View } = ReactNative;
export default class HomeView extends Component {
    static navigationOptions = { headerTitle: '首页' }
    render(){
        return <ScrollTopTableView/>
    }
}
