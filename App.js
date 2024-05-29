import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, Rastreio } from './views';
import { css } from './assets/css/Css';
import AreaRestrita from "./views/arearestrita/AreaRestrita";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "TrackEasy",
            headerStyle: { backgroundColor: "#F58634" },
            headerTintColor: '#333',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTitleAlign: 'center', // Center the title
          }}
        />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        <Stack.Screen name="AreaRestrita" options={{headerShown:false}} component={AreaRestrita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
