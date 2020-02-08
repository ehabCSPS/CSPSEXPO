import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import homeStyles from './HomeStyles'
import CarImg from '../../../assets/images/gifSpeed.gif';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = props => {
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.head}>
        <Icon.Button
          name="arrow-left"
          backgroundColor="#000"
          color="#FF3200"
          style={homeStyles.icon}
          onPress={() => props.navigation.pop()}
        />
        <Text style={homeStyles.headText}>Welcome to CSPS</Text>
        <Text style={homeStyles.headText}>Explore Us</Text>
      </View>
      <View style={homeStyles.body}>
        <Image source={CarImg} style={homeStyles.image} />
      </View>
      <View style={homeStyles.footer}>
        <TouchableOpacity
          style={homeStyles.button}
          onPress={() => props.navigation.push('Login')}>
          <LinearGradient
            colors={['#761700', '#FF3200']}
            style={homeStyles.linearGradient}>
            <Text style={homeStyles.buttonTitle}>Log in</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={homeStyles.button}
          onPress={() => props.navigation.push('Register')}>
          <Text style={homeStyles.buttonTitleSignUp}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Home;
