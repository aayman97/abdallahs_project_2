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
  ScrollView
} from "react-native";
import React from "react";

// import {useSharedValue , useAnimatedScrollHandler, useAnimatedStyle, interpolate, runOnJS, useAnimatedRef} from 'react-native-reanimated';
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePicker from "@react-native-community/datetimepicker";
import DatePickerComponent from "./Components/DatePickerComponent";
import CommunityDropBoxComponent from "./Components/CommunityDropBoxComponent";


const { height, width } = Dimensions.get("screen");

const CreateAnAccountScreen = () => {
  
  


  const [data, setData] = React.useState({
    date: new Date(),
    fullname: "",
    username: "",
    mobilenumber: 0,
    password: "",
    retypePassword: "",
    email: "",
    birthday: "Birthday",
    community : 'Community',
    show: false,
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    if (currentDate) {
      setData({
        ...data,
        date: currentDate,
        show: Platform.OS === "ios",
        birthday:
          selectedDate.getMonth() +
          1 +
          " / " +
          selectedDate.getDate() +
          " / " +
          selectedDate.getFullYear(),
      });
    }
  };

  const BirthdayButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          setData({
            ...data,
            show: !data.show,
          });
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
          <Text
            style={{
              width: "100%",
              fontSize: 20,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {data.birthday}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const CreateAccountButton = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("Next to Create Account Screen 2");
        }}
      >
        <View
          style={{
            width: width * 0.6,
            height: height * 0.07,
            backgroundColor: "#38b34d",
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 20,
            overflow: Platform.OS === "android" ? "hidden" : "visible",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: width * 0.05,
            marginTop: height * 0.025,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "300",
            }}
          >
           Next
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };



  return (
    
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setData({
          ...data,
          show: false,
        });
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


          <KeyboardAvoidingView
            style={{
              flex: 1,
            
              borderRadius: height * 0.1,
              justifyContent: "center",
              alignItems: "center",
            }}
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <Image
              source={require("../assets/logowhiteWithoutWord.png")}
              style={{
                width: width * 0.3,
                height: width * 0.3,
                resizeMode: "contain",
              }}
            />

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
                marginTop: height * 0.05,
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
                  setData({
                    ...data,
                    fullname: data.fullname + text,
                  });
                }}
              />
            </View>

            {/* UserName textinput */}

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
                placeholder="Username"
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: 20,
                  color: "white",
                }}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
              />
            </View>

            {/* Mobile Number TextInput */}
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
                placeholder="Mobile Number"
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: 20,
                  color: "white",
                }}
                keyboardType="numeric"
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                maxLength={11}
              />
            </View>

           
            <CreateAccountButton />
          </KeyboardAvoidingView>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateAnAccountScreen;
