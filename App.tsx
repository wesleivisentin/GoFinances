
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme'

import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { CategorySelect } from './src/screens/CategorySelect';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  useEffect(() => {
    const hideSplash = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }
    }
    hideSplash()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (

    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}