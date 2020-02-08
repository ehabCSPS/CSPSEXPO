import {StyleSheet} from 'react-native';

const homeStyles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      backgroundColor: '#000',
    },
    head: {
      width: '100%',
      height: '33.333%',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 30,
      color: '#fff',
    },
    icon: {
      marginRight: 320,
    },
    image: {
      width: '90%',
      height: '120%',
      alignSelf: 'center',
    },
    headText: {
      fontSize: 22,
      marginTop: 20,
      color: '#fff',
    },
    body: {
      width: '100%',
      height: '33.333%',
      marginBottom: 50,
      marginTop: -40,
    },
    footer: {
      width: '100%',
      height: '33.333%',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 30,
    },
    linearGradient: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      borderRadius: 5,
      paddingTop: 5,
      textAlignVertical: 'center',
    },
    button: {
      width: '70%',
      height: '20%',
      marginTop: 10,
      textAlignVertical: 'center',
    },
    buttonTitle: {
      color: '#fff',
      fontSize: 25,
    },
    buttonTitleSignUp: {
      color: '#fff',
      fontSize: 20,
      alignSelf: 'center',
    },
  });

  export default homeStyles