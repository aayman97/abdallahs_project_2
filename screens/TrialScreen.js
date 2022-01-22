import {
    Dimensions,
    StyleSheet,
    Text,
    Button,
    View,
    FlatList,
    Keyboard,
    TouchableOpacity,
    Animated,
    Platform,
    Image,
    TouchableWithoutFeedback,
    TextInput,
    KeyboardAvoidingView,
  } from "react-native";
  import React from "react";
  // import {useSharedValue , useAnimatedScrollHandler, useAnimatedStyle, interpolate, runOnJS, useAnimatedRef} from 'react-native-reanimated';
  import { AntDesign } from "@expo/vector-icons";
  import { LinearGradient } from "expo-linear-gradient";
  import DateTimePicker from "@react-native-community/datetimepicker";
  import DatePickerComponent from "./Components/DatePickerComponent";
  
  const { height, width } = Dimensions.get("screen");


  const TrialScreen = () =>{

    const [fullname,setFullName] = React.useState({
        name : ''
        
      })
    
      const FullNameTextInput = () => {
        return (
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
            <TextInput
              placeholder="Full Name"
              style={{
                width: "100%",
                height: "100%",
                fontSize: 20,
                color: "white",
              }}
              placeholderTextColor={"rgba(255,255,255,0.7)"}
    
              onChangeText={(text) => {
                setFullName({
                  name : fullname.name+text+""
                })
              }}
              
            />
          </View>
        );
      };
    return(
        <FullNameTextInput/>
    )

  }

  export default TrialScreen