import React from 'react'
import {LinearGradient} from 'expo-linear-gradient';
import languageStyles from './LanguageStyles'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    Alert,
    Button,
    ImageBackground
  } from 'react-native';
import CarImg from '../../../assets/images/gifSpeed.gif'

const Language = (props) => {


    return(
        <View style={languageStyles.container}>
        <View style={languageStyles.head} >
        <Text style={languageStyles.headText}>Welcome to CSPS</Text>
        <Text style={languageStyles.headText}>Explore Us</Text>
            </View>
        <View style={languageStyles.body} >
         
            <Image source={CarImg} style={languageStyles.image} />
            </View>
        <View style={languageStyles.footer} >

       
        <TouchableOpacity  style={languageStyles.button} onPress={() => props.navigation.push('Home')}  >
        <LinearGradient colors={['#761700', '#FF3200']} style={languageStyles.linearGradient}>
                <Text  style={languageStyles.buttonTitle}>English</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={languageStyles.button} >
            <LinearGradient colors={['#761700', '#FF3200']}
             style={languageStyles.linearGradient}
            >
                <Text  style={languageStyles.buttonTitle}>العربية</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
      </View>
    )
}



export default Language