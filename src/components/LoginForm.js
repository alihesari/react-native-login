import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser
} from '../actions';

class LoginForm extends Component {
  onEmailChanged (text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged (text) {
    this.props.passwordChanged(text);
  }

  onLoginUser() {
    const { email, password } = this.props;
    this.props.loginUser({email, password});
  }

  renderButton() {
    if(this.props.loading) {
      return (<ActivityIndicator />);
    } else {
      return (
        <TouchableOpacity style={style.loginBtn} activeOpacity={0.8} onPress={this.onLoginUser.bind(this)}>
          <Text style={style.loginBtnText}>Login</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.loginForm}>
          <Text style={style.pageTitle}>Login</Text>
          <Text style={style.error}>{this.props.error}</Text>
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
          {this.renderButton()}
        </View>
      </View>
    );
  } 
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
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
  },
  error: {
    color: 'red',
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error
  }
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);