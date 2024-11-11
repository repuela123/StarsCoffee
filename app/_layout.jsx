import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

import {useFonts} from 'expo-font'
import { useEffect } from 'react'
import { SplashScreen } from 'expo-router'


SplashScreen.preventAutoHideAsync();

const Mainlayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <>  
    

    <Stack> 
        <Stack.Screen name="index" options={{
            headerShown: false
        }}/>
    </Stack>

    </>
  )
}

export default Mainlayout