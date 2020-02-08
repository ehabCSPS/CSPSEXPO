import {StyleSheet} from 'react-native';
const languageStyles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: '#000'
    },
    head: {
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
         paddingTop:30,   
    },
    image: {
        width:'90%',
        height:'120%',
        alignSelf: 'center',
        paddingTop:10
    },
    headText: {
        fontSize:22,
        marginTop:20,
        color:'#fff'
    },
    body: {
        width: '100%', 
        height: '33.333%',
        flexDirection: 'column',
        marginTop:-25,
        marginBottom:15,
    },
    footer: {
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
         marginTop:40
    },
    linearGradient: {
        width:'100%',
        height:'100%',
        alignItems:'center',
        paddingTop:5,
        borderRadius:5,
        textAlignVertical:'center' 
    },
    button: {
        width:'80%',
        height:'20%',
        marginTop: 30,
        textAlignVertical:'center' 
    },
    buttonTitle:{
        color:'#fff',
        fontSize:25,
    }
  });

  export default languageStyles;