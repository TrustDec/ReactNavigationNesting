import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
    StyleSheet,
    View,
    Text,
} = ReactNative;
export class One extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#E6ACAE',alignItems:'center',justifyContent:'center', }}>
                <Text>One</Text>
            </View>
        );
    }
}
export class Two extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#AEDFA3',alignItems:'center',justifyContent:'center',}}>
                <Text>Two</Text>
            </View>
        );
    }
}
export class Three extends Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F3D0A7',alignItems:'center',justifyContent:'center',}}>
                <Text>Three</Text>
            </View>
        );
    }
}
export class Four extends Component {
    static navigationOptions = { tabBarLabel:"四" };
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#A5D9EA',alignItems:'center',justifyContent:'center',}}>
                <Text>Four</Text>
            </View>
        );
    }
}