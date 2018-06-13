import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class LoginForm extends Component {
  render() {
    return (
      <View style={style.loginForm}>
        <Text style={style.pageTitle}>Login</Text>
        <TextInput
          placeholder="Email"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={style.loginBtn} activeOpacity={0.8}>
          <Text style={style.loginBtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  } 
}

const style = StyleSheet.create({
  pageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  loginForm: {
    width: '90%',
  },
  loginBtn: {
    backgroundColor: 'blue',
    paddingTop: 10,
    paddingBottom: 10
  },
  loginBtnText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default LoginForm;