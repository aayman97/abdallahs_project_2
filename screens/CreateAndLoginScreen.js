import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View,FlatList, TouchableOpacity,Animated, Platform, Image } from 'react-native';
import React from 'react';
// import {useSharedValue , useAnimatedScrollHandler, useAnimatedStyle, interpolate, runOnJS, useAnimatedRef} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const {height,width} = Dimensions.get('screen')


const CreateAndLoginScreen = () =>{

return <View style={{
    flex : 1,
    backgroundColor : 'white',
  
}}>
     <LinearGradient
        // Background Linear Gradient
        colors={['#00a79d', 'black']}
        start={{
            x : 0,
            y : 0
        }}
        end={{
            x : 0.1,
            y : 2.0
        }}
        style={{
            flex : 1,
            borderRadius : height*0.1,
            justifyContent : 'center',
            alignItems : 'center'
        }}
      >
    <View style={{
        flex : 1,
        // backgroundColor : '#00a79d',
        borderRadius : height*0.1,
        justifyContent : 'center',
        alignItems : 'center'
    }}>
        <Image
        source={require('../assets/logowhite.png')}
        style={{
            width : width*0.4,
            height : width*0.4,
            resizeMode : 'contain'
        }}
        />

        <TouchableOpacity style={{
               width : width*0.6,
               height : height*0.08,
               backgroundColor : '#01a69c',
               shadowOpacity : 0.3,
               shadowRadius : 5,
               elevation : 20,
               overflow: Platform.OS ==='android'? "hidden" : 'visible',
               justifyContent : 'center',
               alignItems : 'center',
               borderRadius : width*0.05,
               marginTop : height*0.05
        }}>
            <Text style={{
                color : 'white',
                fontSize : 22,
                fontWeight : '300'
            }}>
                Login
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
               width : width*0.6,
               height : height*0.08,
               backgroundColor : '#38b34d',
               shadowOpacity : 0.3,
               shadowRadius : 5,
               elevation : 20,
               overflow: Platform.OS ==='android'? "hidden" : 'visible',
               justifyContent : 'center',
               alignItems : 'center',
               borderRadius : width*0.05,
               marginTop : height*0.025
        }}>
            <Text style={{
                color : 'white',
                fontSize : 22,
                fontWeight : '300'
            }}>
                Create Account
            </Text>
        </TouchableOpacity>


    </View>
    </LinearGradient>
</View>

}

export default CreateAndLoginScreen;