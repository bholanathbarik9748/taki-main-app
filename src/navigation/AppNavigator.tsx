import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen'; // Ensure this path is correct

// Define the type for the stack navigator's params
type RootStackParamList = {
  SplashScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: true} as StackNavigationOptions}>
        {/* Define SplashScreen */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}} // Customize header visibility for SplashScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;