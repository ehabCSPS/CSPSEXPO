import {StyleSheet} from 'react-native';
const registerStyles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#000',
    },
    headText: {
      fontSize: 35,
      margin: 25,
      color: '#fff',
    },
    icon: {
      // marginRight:300,
      marginLeft: 15,
      marginTop: 25,
    },
    emailLabel: {
      fontSize: 18,
      margin: 25,
      marginBottom: 10,
      color: '#c7c7c7',
    },
    emailInput: {
      fontSize: 20,
      marginLeft: 25,
      marginTop: -20,
    },
    passwordLabel: {
      fontSize: 20,
      margin: 25,
    },
    passwordInput: {
      fontSize: 20,
      marginLeft: 25,
      marginTop: -20,
    },
    head: {},
    body: {},
    textfield: {
      marginLeft: 25,
      width: '90%',
      marginTop: -10,
    },
    name: {
      flexDirection: 'column',
      width: '50%',
    },
    names: {
      flexDirection: 'row',
      marginTop: -20,
    },
    footer: {
      width: '100%',
      height: '33.333%',
      flexDirection: 'column',
      alignItems: 'center',
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
    },
  
    buttonTitleLogin: {
      color: '#fff',
      fontSize: 25,
      padding: 10,
    },
    gotoSignUp: {
      flexDirection: 'row',
      margin: 40,
      marginTop: 10,
      alignItems: 'center',
      alignSelf:'center',
      width:400
    },
    signInLabel: {
      color: '#c7c7c7',
      fontSize: 17,
      marginLeft: 50,
      alignContent:'center'
    },
    buttonTitleSignIn: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop:5
    },
  });

  export default registerStyles