import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged
} from '../actions';

class LoginForm extends Component {
  onEmailChanged (text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged (text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <View style={style.loginForm}>
        <Text style={style.pageTitle}>Login</Text>
        <TextInput
          placeholder="Email"
          onChangeText={ this.onEmailChanged.bind(this) }
          value={ this.props.email }
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={ this.onPasswordChanged.bind(this) }
          value={ this.props.password }
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

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged
})(LoginForm);