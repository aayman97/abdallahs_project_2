import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View,FlatList, TouchableOpacity,Animated } from 'react-native';
// import {useSharedValue , useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';


const PageIndicator = ({startingScreenList,index,opacityOffset,width,height}) => {


    const inputRange = [(index-1)*width,(index)*width,(index+1)*width]

    

    const opacity = opacityOffset.interpolate({
        inputRange,
        outputRange: [0.4, 1, 0.4],
        extrapolate: 'clamp',
      })

    // const animatedStyle = useAnimatedStyle(()=> {
    //     const opacityInterpolate = interpolate(opacityOffset.value,inputRange,[0.2,1,0.2],Extrapolate.CLAMP)
      
    //     return{
    //         opacity : opacityInterpolate
    //     }
    // },[])
return(
    <Animated.View 
                            key={index}
                            style={[{
                                width : width/30,
                                height : width/30,
                                backgroundColor : 'white',
                                marginLeft : width*0.02,
                                borderRadius : width/startingScreenList.length,
                                alignSelf : 'center',
                                opacity
                            }]}>

                            </Animated.View>
                        
)


}

export default PageIndicator