import React, {useEffect, useState} from 'react';
import loginStyles from './LoginStyles';
import {NavigationScreenProp} from 'react-navigation';
import {connect} from 'react-redux';

import {LinearGradient} from 'expo-linear-gradient';

import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';


import {MKTextField, MKColor} from 'react-native-material-kit';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  validateEmail,
  validatePassword,
} from './../../../global/functions/validation';
import { login } from './LoginActions';



const Login = ({login,navigation}) => {
  const [user, setUser] = useState({email: '', password: ''});

  const handleEmail = text => {
    setUser({...user, email: text});
  };
  const handlePassword = text => {
    setUser({...user, password: text});
  };
  const submitLogin = () => {
    if (validatePassword(user.password)) {
      login(user);
    } else {
      //show error
      console.log("Wrong Credentials");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={loginStyles.container} behavior="padding">
        <View style={loginStyles.head}>
          <Icon.Button
            name="arrow-left"
            backgroundColor="#000"
            color="#FF3200"
            style={loginStyles.icon}
            onPress={() => navigation.pop()}
          />
          <Text style={loginStyles.headText}>Login</Text>
        </View>

        <View style={loginStyles.body}>
          <Text style={loginStyles.emailLabel}>Username</Text>
          <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver, fontSize: 17}}
            placeholder="username"
            name="username"
            onChangeText={handleEmail}
            placeholderTextColor="#fff"
            keyboardType="email-address"
            style={loginStyles.textfield}
          />
          <Text style={loginStyles.emailLabel}>Password</Text>
          <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver, fontSize: 17}}
            placeholder="password"
            password={true}
            onChangeText={handlePassword}
            name="password"
            placeholderTextColor="#fff"
            style={loginStyles.textfield}
          />
        </View>

        <View style={loginStyles.footer}>
          <TouchableOpacity onPress={submitLogin} style={loginStyles.loginButton}>
            <LinearGradient
              colors={['#761700', '#FF3200']}
              style={loginStyles.linearGradient}>
              <Text style={loginStyles.buttonTitleLogin}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <View style={loginStyles.gotoSignUp}>
            <Text style={loginStyles.signUpLabel}>You don't have account ?</Text>
            <TouchableOpacity
              style={loginStyles.signUpLabel}
              onPress={() => navigation.push('Register')}>
              <Text style={loginStyles.buttonTitleSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={loginStyles.forgotPasswordButton}>
            <Text style={loginStyles.forgotPasswordLabel}>Forgot My Password</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};



export default Login;

