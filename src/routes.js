import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';

export default createStackNavigator(
  {
    Login: LoginForm
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    mode: 'card'
  }
);