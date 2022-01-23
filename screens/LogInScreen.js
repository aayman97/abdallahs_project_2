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
  ScrollView,
} from "react-native";
import React from "react";

// import {useSharedValue , useAnimatedScrollHandler, useAnimatedStyle, interpolate, runOnJS, useAnimatedRef} from 'react-native-reanimated';
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("screen");

const LogInScreen = () => {
  const LogInButton = () => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("LogIn");
        }}
      >
        <View
          style={{
            width: width * 0.6,
            height: height * 0.07,
            backgroundColor: "#01a59c",
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 20,
            overflow: Platform.OS === "android" ? "hidden" : "visible",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: width * 0.05,
            marginTop: height * 0.025,
            marginBottom: height * 0.025,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "300",
            }}
          >
            Login
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

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
              source={require("../assets/logowhite.png")}
              style={{
                width: width * 0.4,
                height: width * 0.4,
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
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: width * 0.1,
                borderWidth: 3,
                borderColor: "#04a299",
                paddingHorizontal: width * 0.05,
                backgroundColor: "transparent",
                marginTop: height * 0.02,
                flexDirection: "row",
              }}
            >
              <Feather name="user" size={30} color="#65dc99" />
              <TextInput
                placeholder="Username"
                style={{
                  width: "80%",
                  height: "100%",
                  fontSize: 20,
                  color: "#65dc99",
                }}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                
              />
            </View>

            <View
              style={{
                width: width * 0.6,
                height: height * 0.07,
                shadowOpacity: 0.3,
                shadowRadius: 5,
                elevation: width * 0.3,
                overflow: Platform.OS === "android" ? "hidden" : "visible",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: width * 0.1,
                borderWidth: 3,
                borderColor: "#04a299",
                paddingHorizontal: width * 0.05,
                backgroundColor: "transparent",
                marginTop: height * 0.02,
                flexDirection: "row",
              }}
            >
              <Feather name="lock" size={30} color="#65dc99" />
              <TextInput
                placeholder="Password"
                style={{
                  width: "80%",
                  height: "100%",
                  fontSize: 20,
                  color: "#65dc99",
                }}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                secureTextEntry
              />
            </View>

            <LogInButton />
          </KeyboardAvoidingView>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LogInScreen;
