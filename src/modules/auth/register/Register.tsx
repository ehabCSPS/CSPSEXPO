import React, {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {MKTextField, MKColor} from 'react-native-material-kit';
import axios from 'axios';
import {API_URL} from '../../../global/API_URL';
import Icon from 'react-native-vector-icons/FontAwesome';
import registerStyles from './RegisterStyles'
const Register = props => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    username: username,
    password: password,
  };
  const signUp = user => {
    console.log(user);
    axios
      .post(API_URL + '/Account/Register', user)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    props.navigation.push('Home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAwareScrollView
        style={{backgroundColor: '#000'}}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={registerStyles.container}
        scrollEnabled={false}>
        <View style={registerStyles.head}>
          <Icon.Button
            name="arrow-left"
            backgroundColor="#000"
            color="#FF3200"
            style={registerStyles.icon}
            onPress={() => props.navigation.pop()}
          />
          <Text style={registerStyles.headText}>Sign Up</Text>
        </View>
        <View style={registerStyles.body}>
          <View style={registerStyles.names}>
            <View style={registerStyles.name}>
              <Text style={registerStyles.emailLabel}>First Name</Text>
              <MKTextField
                tintColor={MKColor.Silver}
                textInputStyle={{color: MKColor.Silver, fontSize: 17}}
                placeholder="first name"
                placeholderTextColor="#fff"
                style={registerStyles.textfield}
                onChangeText={text => {
                  setFirstname(text);
                }}
              />
            </View>
            <View style={registerStyles.name}>
              <Text style={registerStyles.emailLabel}>Last Name</Text>
              <MKTextField
                tintColor={MKColor.Silver}
                textInputStyle={{color: MKColor.Silver, fontSize: 17}}
                placeholder="last name"
                placeholderTextColor="#fff"
                style={registerStyles.textfield}
                onChangeText={text => {
                  setLastname(text);
                }}
              />
            </View>
          </View>
          <Text style={registerStyles.emailLabel}>Email</Text>
          <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver, fontSize: 17}}
            placeholder="email"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            style={registerStyles.textfield}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <Text style={registerStyles.emailLabel}>Username</Text>
          <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver, fontSize: 17}}
            placeholder="username"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            style={registerStyles.textfield}
            onChangeText={text => {
              setUsername(text);
            }}
          />
          <Text style={registerStyles.emailLabel}>Password</Text>
          <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver, fontSize: 17}}
            placeholder="password"
            password={true}
            placeholderTextColor="#fff"
            style={registerStyles.textfield}
            onChangeText={text => {
              setPassword(text);
            }}
          />
        </View>
        <View style={registerStyles.footer}>
          <TouchableOpacity
            style={registerStyles.loginButton}
            onPress={() => signUp(user)}>
            <LinearGradient
              colors={['#761700', '#FF3200']}
              style={registerStyles.linearGradient}>
              <Text style={registerStyles.buttonTitleLogin}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={registerStyles.gotoSignUp}>
            <Text style={registerStyles.signInLabel}>You already have Account ?</Text>
            <TouchableOpacity
              style={registerStyles.loginButton}
              onPress={() => props.navigation.push('Login')}>
              <Text style={registerStyles.buttonTitleSignIn}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};


export default Register;
