import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class App extends Component {
    
    render() {
        let obj = { name:'name', age:"age", num: [ "SmallRui", { twoName: "twoName" } ] } ;
        let {name: NAME, age: AGE, num: [ smallrui, { twoName:TN } ] } = obj;
        return (
            <View style={styles.container}>
                <Text>{`${NAME},${AGE},${smallrui},${TN}`}</Text>
                <Text>{'*'.repeat(10)}</Text>
                <Text>{String.raw({raw:'test'},0,1,2,3)}</Text>
                <TouchableOpacity style={styles.button} onPress={this._toDetail.bind(this)}>
                    <Text style={styles.instructions}>
                        To Detail Screen
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }

    _toDetail() {
        this.props.navigation.navigate('Detail')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#fff',
    },
    button: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    }
});

export default connect(state => ({}), dispatch => ({}))(App);

