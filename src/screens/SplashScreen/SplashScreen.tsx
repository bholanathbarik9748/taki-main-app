import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import useAuthToken from '../../hooks/useAuthToken';

// Define the types for navigation and route
type RootStackParamList = {
  SplashScreen: undefined;
  SignIn: undefined;
  Dashboard: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList,'SplashScreen'>;
type SplashScreenRouteProp = RouteProp<RootStackParamList, 'SplashScreen'>;

type Props = {
  navigation: SplashScreenNavigationProp;
  route: SplashScreenRouteProp;
};

const SplashScreen: React.FC<Props> = ({navigation}) => {
  const {token, getToken} = useAuthToken(); // Using the custom hook

  useEffect(() => {
    const fetchToken = async () => {
      await getToken(); // Fetch token on mount
      if (token) {
        navigation.replace('SignIn'); // Navigate to the main screen if token exists
      } else {
        navigation.replace('Dashboard'); // Navigate to login if no token found
      }
    };

    fetchToken(); // Invoke the function
  }, [token, navigation, getToken]); // Ensure dependencies are correct

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default SplashScreen;
