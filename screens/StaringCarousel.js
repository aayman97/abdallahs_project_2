import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View,FlatList, TouchableOpacity,Animated, Platform } from 'react-native';
import React from 'react';
// import {useSharedValue , useAnimatedScrollHandler, useAnimatedStyle, interpolate, runOnJS, useAnimatedRef} from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import PageIndicator from './Components/PageIndicator';




const {height,width} = Dimensions.get('screen')

const StartingScreens = [
    {
      title : 'Let'+"\'s Start Wasting!",
      image : '',
      subTitle : 'Recieving Bags',
      captian : 'You'+"\'ll be recieving barcoded biodegradable bags from Plastale on a monthly basis."
    },
    {
      title : 'Fill and Drop!',
      image : '',
      subTitle : 'Dropping Off',
      captian : 'When your casy bin is full, drop your coded plastic bags in the nearest smart bin container.'
    },
    {
      title : 'Get Scanned!',
      image : '',
      subTitle : 'Collection Process',
      captian : 'Barcodes are scanned by collecters and points are automatically calculated to your account.'
    },
    {
      title : 'Happy Wasting!',
      image : '',
      subTitle : 'Collect & Win',
      captian : 'You can then redeem your points with voucher for resturants, cafes, shops, or pharmacies for discount.'
    },
  ]
  


const StartingCarousel = () => {



    // const aref = useAnimatedRef();
    // const opacityOffset = useSharedValue(0);

    const [activeIndex,setActiveIndex] = React.useState(0)
    

    // const scrollHandler = useAnimatedScrollHandler((event) => {
    //     opacityOffset.value = event.contentOffset.x;
    //     runOnJS(setActiveIndex)(Math.floor(event.contentOffset.x/width)  )  
    //   });

    const flatlistref = React.useRef()
    const opacityOffset = new Animated.Value(0)
 

    React.useEffect(()=>{
        console.log(activeIndex)
    },[activeIndex])
    

return   <View style={styles.container}>
            <Animated.FlatList
          ref={flatlistref}
                data={StartingScreens}
                keyExtractor={(_,i) => i}
                horizontal
                snapToInterval={width}
                decelerationRate={'fast'}
                bounces={false}
                overScrollMode={'never'}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: opacityOffset } } }],
                    { useNativeDriver: false, listener: ev => 
                   { if(Platform.OS === 'android'){
                    setActiveIndex(Math.ceil(ev.nativeEvent.contentOffset.x / width))        
                    }else{
                        setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
                    }
                }
                    
                    }
                  )}
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index}) => {

                    return (
                        <View style={{
                            flex : 1,
                            backgroundColor :'white',
                            width,
                            height
                        }}>

                            <View style={{flex : 1, alignItems : 'center'}}>

                                
                            

                                <Text style={{
                                    marginTop : height*0.07,
                                    fontSize : 25,
                                    fontWeight : 'bold',
                                    color : '#01953f'
                                }}>{item.title}</Text>
                            </View>

                            <View style={{
                                flex : 1,
                                backgroundColor : "#00a79d",
                                borderRadius : 40,
                                shadowOpacity : 0.4,
                                elevation : 2,
                                shadowRadius : 20,
                                alignItems : 'center',
                                padding : width*0.01
                            }}>
                                <Text style={{
                                    color : 'white',
                                    fontSize : 25,
                                    fontWeight : 'bold',
                                    marginTop : height*0.05
                                }}>
                                    {item.subTitle}
                                </Text>

                                <Text style={{
                                    color : 'white',
                                    fontSize : 20,
                                    fontWeight : '200',
                                    opacity : 0.7,
                                    width : width/1.5,
                                    letterSpacing : 1,
                                    lineHeight : 25,
                                    backgroundColor : 'transparent',
                                    textAlign : 'center',
                                    marginTop : height*0.05
                                }}>
                                    {
                                        item.captian
                                    }
                                </Text>

                            </View>
                            </View>
                    )
                }}
            />

            <View style={{height : width/25, width: ((width/30)+(width*0.02) )*StartingScreens.length, backgroundColor : "transparent", flexDirection : 'row', justifyContent : 'center', position : 'absolute', transform : [{
                translateY : height*0.42
            }]}}>
                    {
                        StartingScreens.map((value,index) => {
                        


                            return <PageIndicator key={index} startingScreenList={StartingScreens} index={index} opacityOffset={opacityOffset} width={width}/>
                        })
                    }

                  
            </View>

            { activeIndex === StartingScreens.length-1 ? null : <TouchableOpacity style={{
                        width : width*0.15,
                        height : width*0.15,
                        backgroundColor : 'transparent',
                        position : 'absolute',
                        justifyContent : 'center',
                        alignItems : 'center',
                        transform : [{
                            translateY : (height*0.48) -( width*0.15)
                        },{
                            translateX : (width/1.8)-(width*0.15),
                        }]
                    }}
                    
                    onPress={() => {
                        if (flatlistref.current) {
                       
                            flatlistref.current.scrollToIndex({
                                index : activeIndex+1,
                                animated : true
                            });
                          } 
                       
                    }}
                    >
                        <AntDesign name="arrowright" size={40} color="white" />
                    </TouchableOpacity>}
</View>


}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      position : 'relative',
      width,
      height
    },
  });
  

export default StartingCarousel