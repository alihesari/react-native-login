/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';
import RootStack from './src/routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk)) }>
        <RootStack />
        
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});
