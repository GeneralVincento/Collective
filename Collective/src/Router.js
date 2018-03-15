import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SigninEmailForm from './components/SigninEmailForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
        <Scene key="siginEmailForm" component={SigninEmailForm} title="Please Sign In" />
      </Scene>

      
    </Router>
  );
};

export default RouterComponent;
