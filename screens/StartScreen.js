import {
  Dimensions,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from "react";

import Animated,{useSharedValue , useAnimatedScrollHandler, useAnimatedStyle, interpolate, runOnJS, useAnimatedRef, withSequence, withTiming, Easing, withSpring, withRepeat} from 'react-native-reanimated';
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("screen");

const StartScreen = () => {
 

  const animations = useSharedValue(height*0.2)
  const scaleAnimation = useSharedValue(1.05)


  const animatedStyle= useAnimatedStyle(()=>{

    const opacity = interpolate(animations.value,[height*0.2,0],[0,1])
    // const scale = interpolate(animations.value,[height*0.2,0],[0.2,1.2])
    return{
      transform : [{
        translateY : animations.value
      },{
        scale : scaleAnimation.value
      }],
      opacity
    }
  })
  React.useEffect(()=>{
    animations.value= withSpring(0,{
      damping : 10
    })
    scaleAnimation.value = withRepeat(withTiming(1.0,{
      duration : 1000,
      
    }),10,true)
  },[])

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["#00a79d", "black"]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 0.1,
            y: 2.0,
          }}
          style={{
            flex: 1,
            borderRadius: height * 0.1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         
         <Animated.Image
              source={require("../assets/logoWord.png")}
              style={[{
                width: width * 0.5,
                height: width * 0.5,
                resizeMode: "contain",
              },animatedStyle]}
            />
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartScreen;
