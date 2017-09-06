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
export default class MessView extends Component {
    static navigationOptions = { headerTitle: '消息' }
    render(){
        return(
            <View>
                <Text>MessView</Text>
            </View>
        );
    }
}