import DateTimePicker from "@react-native-community/datetimepicker";
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
   import Animated,{useSharedValue , useAnimatedScrollHandler, useAnimatedStyle, interpolate, runOnJS, useAnimatedRef, withTiming, withSpring} from 'react-native-reanimated';


const DatePickerComponent = ({setBirthday,date,onChange,setShow,data}) =>{

const tranlateYoffset = useSharedValue(200);


React.useEffect(()=>{
    tranlateYoffset.value = withTiming(0, {duration : 500})
},[])

const animatedStyle = useAnimatedStyle(() =>{
 return{
     transform : [{translateY : tranlateYoffset.value}]
 }   
})


    return <Animated.View style={[animatedStyle]}>
           <DateTimePicker
    testID="dateTimePicker"
    value={date}
    mode={"date"}
    display="spinner"

    onChange={(e, selectedDate) =>{
        onChange(e,selectedDate)
    }
    
    }
  />
    </Animated.View>
 

}

export default DatePickerComponent;
