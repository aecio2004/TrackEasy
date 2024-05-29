import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {css} from '../assets/css/Css';

export default function Home({navigation}) {

    return (
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home} onPress={() => navigation.navigate('Login')}>
                <Image source={require('../assets/img/buttonLogin.png')}style={css.buttonImage}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Rastreio')}>
                <Image source={require('../assets/img/buttonRastreio.png')}style={css.buttonImage}/>
            </TouchableOpacity>
        </View>
    );
}