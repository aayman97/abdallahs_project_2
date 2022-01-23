import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get("screen");


const MapAndPins = () => {
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);
  
    React.useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
        setLocation(location);
      })();

     
    }, []);
  
    return (
      <View
        style={{
          flex: 1,
  
          position : 'relative'
        }}
      >

     

        {location ? (
          <MapView
            style={{
          
              width,
              height: height,
           
            }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.08,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              image={require('../assets/pin.png')}
              title={"My Location"}
            />

            
          </MapView>
        ) : null}

  <View style={{
                width : width,
                height : height*0.25,
                position : 'absolute',
               alignItems : 'center'
            }}>


<View style={{
     width : width*0.95,
     height : height*0.17,
     position : 'relative'
}}>
<LinearGradient
         
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
            borderRadius: height * 0.08,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        
          <View style={{
              width : '100%',
              height : '30%',
              backgroundColor : 'transparent',
              flexDirection : 'row',
              alignItems : 'center',
              justifyContent : 'space-between',
              paddingHorizontal : width*0.05
          }}>
              <TouchableOpacity>
                  <Ionicons name="chevron-back" size={40} color="white" />
              </TouchableOpacity>
              
              <TouchableOpacity style={{
                  width : '12%',
                  height : '100%',
                  backgroundColor : "white",
                  justifyContent : 'center',
                  alignItems : 'center',
                  borderRadius : 30
              }}>
                  <Ionicons name="person" size={30} color="#00a79d" />
              </TouchableOpacity>
          </View>

          <TouchableOpacity
          style={{
              width : width*0.2,
              height : height*0.01,
              backgroundColor : 'rgba(255,255,255,0.7)',
              borderRadius : height*0.01,
              transform : [{
                  translateY : height*0.015
              }]
          }}
          />
    
</LinearGradient>


</View>


<View style={{
    width : width*0.7,
    height : height*0.07,
    backgroundColor : 'white',
    position : 'absolute',
    top :  height*0.15,
    borderRadius : width*0.05,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 20,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    padding : width*0.04
}}>
<Ionicons name="ios-search-outline" size={27} color="#86888a" />
        <TextInput
        placeholder="Search Location"
        style={{
            fontSize : 17,
            height : '100%',
            width : "85%",
            color : '#86888a',
            fontWeight : '600',
            letterSpacing : 0.5
        }}
        placeholderTextColor={'#86888a'}
        />
</View>
</View>

      </View>
    );
  };
  
  export default MapAndPins;