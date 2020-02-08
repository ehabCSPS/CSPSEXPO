import {StyleSheet} from 'react-native';
const loginStyles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#000',
      height: '100%',
    },
    headText: {
      fontSize: 35,
      margin: 25,
      color: '#fff',
    },
    textfield: {
      marginLeft: 25,
      width: '90%',
      marginTop: -10,
    },
    icon: {
      // marginRight:300,
      marginLeft: 15,
      marginTop: 25,
    },
    emailLabel: {
      fontSize: 18,
      margin: 25,
      color: '#c7c7c7',
      marginTop: 30,
    },
    emailInput: {
      fontSize: 20,
      marginLeft: 25,
      marginTop: -20,
      color: '#fff',
    },
    passwordLabel: {
      fontSize: 18,
      margin: 25,
      color: '#fff',
    },
    passwordInput: {
      fontSize: 20,
      marginLeft: 25,
      marginTop: -20,
      color: '#fff',
    },
    head: {
      // height: '33.333%',
    },
    body: {
      // height: '33.333%',
    },
    footer: {
      width: '100%',
      // height: '33.333%',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 50,
    },
    linearGradient: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      borderRadius: 5,
      alignContent: 'center',
    },
    loginButton: {
      width: '80%',
      height: 60,
      marginTop: 30,
      alignContent: 'center',
    },
  
    buttonTitleLogin: {
      color: '#fff',
      fontSize: 25,
      padding: 10,
    },
    gotoSignUp: {
      flexDirection: 'row',
      margin: 40,
      marginBottom: 20,
    },
    signUpLabel: {
      color: '#c7c7c7',
      fontSize: 17,
      marginRight: 10,
    },
    buttonTitleSignUp: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
    },
    forgotPasswordButton: {
      width: '60%',
      height: '28%',
      alignContent:'center',
    },
    forgotPasswordLabel: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold',
      alignSelf:'center',
    },
  });

  export default loginStyles; 