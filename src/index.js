import { AppRegistry,StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import AppNavigationMain from './AppNavigationMain';

const store = createStore();
StatusBar.setBarStyle('light-content',true);
export default class ReactNavigationExamples extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigationMain />
            </Provider>
        );
    }
};

AppRegistry.registerComponent('ReactNavigationExamples', () => ReactNavigationExamples);
