import React, { Component } from 'react';
import ReactNative from 'react-native';
const {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    SectionList,
    TouchableWithoutFeedback
} = ReactNative;
export default class UserView extends Component {
    static navigationOptions = { headerTitle: '我的' }
    render(){
        return(
            <View>
                <Text>UserView</Text>
            </View>
        );
    }
}