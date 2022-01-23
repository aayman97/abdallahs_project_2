import {
  Dimensions,
  StyleSheet,
  Text,
  Button,
  View,
  FlatList,
  Keyboard,
  TouchableOpacity,
  Platform,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Animated, {interpolate, useAnimatedStyle, useSharedValue ,withTiming} from 'react-native-reanimated';
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("screen");

const TrialScreen = () => {

const heightTransformation = useSharedValue(0)

const [show, setShow] = React.useState(false)



const animatedStyle = useAnimatedStyle(() => {
  return {
    height : heightTransformation.value
  }
})

const animatedStyleForArrow = useAnimatedStyle(() =>{
  const rotate = interpolate(heightTransformation.value,[0, 3*(height * 0.07)],[0,180])
  return{
    transform : [{rotate : rotate +'deg'}]
  }
})

const animatedStyleForText= useAnimatedStyle(() =>{
  const fontSize = interpolate(heightTransformation.value,[0, 3*(height * 0.07)],[0,20])
  const opacity = interpolate(heightTransformation.value,[0, 3*(height * 0.07)],[0,1])
  return{
   fontSize,
   opacity
  }
})


React.useEffect(() => {
if(show){
  heightTransformation.value = withTiming( 3*(height * 0.07))
}
else{
  heightTransformation.value = withTiming(0)
}
},[show])

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
      }}
    >
      <View
        style={{
          width: width * 0.6,
          height: height * 0.07,
          shadowOpacity: 0.3,
          shadowRadius: 5,
          elevation: width * 0.3,
          overflow: Platform.OS === "android" ? "hidden" : "visible",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: width * 0.1,
          borderWidth: 3,
          borderColor: "#04a299",
          paddingHorizontal: width * 0.05,
          backgroundColor: "transparent",
          marginTop: height * 0.02,
         
        }}
      >
  
       <TouchableOpacity
       style={{
        width: "100%",
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
       }}
       onPress={() => setShow(!show)}
       >
        <Text
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          community
        </Text>

        <Animated.View style={[animatedStyleForArrow]} >
        <AntDesign name="down" size={24} color="rgba(255,255,255,0.7)" />
        </Animated.View>


        </TouchableOpacity>


      </View>

    
      <Animated.View style={[{
         width: width * 0.6,
         height: 3*(height * 0.07),
         backgroundColor : 'transparent',
         marginTop : 10,
         
      },animatedStyle]}>

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
            borderRadius : 20,
         
          }}
        >
          <TouchableOpacity style={{
               width: width * 0.6,
               height: height * 0.07,
               backgroundColor : 'transparent',
               justifyContent : 'center',
               padding : width * 0.03
          }}>
            <Animated.Text
            style={[{
              color : 'white',
              fontSize : 20,
              letterSpacing : 1,
              fontWeight : '300'
            },animatedStyleForText]}
            >Dell</Animated.Text>
          </TouchableOpacity>


          <TouchableOpacity style={{
               width: width * 0.6,
               height: height * 0.07,
               backgroundColor : 'transparent',
               justifyContent : 'center',
               padding : width * 0.03
          }}>
            <Animated.Text
           style={[{
            color : 'white',
            fontSize : 20,
            letterSpacing : 1,
            fontWeight : '300'
          },animatedStyleForText]}
            >GUC</Animated.Text>
          </TouchableOpacity>

          <TouchableOpacity style={{
               width: width * 0.6,
               height: height * 0.07,
               backgroundColor : 'transparent',
               justifyContent : 'center',
               padding : width * 0.03
          }}>
            <Animated.Text
            style={[{
              color : 'white',
              fontSize : 20,
              letterSpacing : 1,
              fontWeight : '300'
            },animatedStyleForText]}
            >SODIC</Animated.Text>
          </TouchableOpacity>

        </LinearGradient>
      </Animated.View>
    </View>
  );
};

export default TrialScreen;
