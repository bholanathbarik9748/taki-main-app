import React, {useEffect, useMemo} from 'react';
import {StyleSheet, Animated, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import useAuthToken from '../../hooks/useAuthToken';
import {colors} from '../../assets/color/colors';

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

  // Create animated values for fade-in, scale, and slide-up effects
  const fadeAnim = useMemo(() => new Animated.Value(0), []);
  const translateY = useMemo(() => new Animated.Value(20), []);
  const scaleLogo = useMemo(() => new Animated.Value(0.8), []); // Add scale animation

  useEffect(() => {
    const fetchToken = async () => {
      await getToken(); // Fetch token on mount
      setTimeout(() => {
        if (!token) {
          navigation.replace('SignIn'); // Navigate to login screen if token exists
        } else {
          navigation.replace('Dashboard'); // Navigate to main screen if no token found
        }
      }, 2000);
    };

    // Start animation for logo (fade in + slide up + scale)
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        speed: 1,
        bounciness: 12,
        useNativeDriver: true,
      }),
    ]).start();

    fetchToken(); // Invoke the function
  }, [token, navigation, getToken, fadeAnim, translateY, scaleLogo]); // Ensure dependencies are correct

  return (
    <LinearGradient
      colors={[colors.darkPrimary, colors.darkSecondary]} // Adding gradient background
      style={styles.container}>
      {/* Add an icon or logo at the top with animation */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{translateY}, {scale: scaleLogo}],
          },
        ]}>
        <Image
          source={require('../../assets/images/logo.png')} // Add your logo image here
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150, // Adjust width and height based on your logo size
    height: 150,
  },
  text: {
    fontSize: 54, // Adjusted for better readability
    color: colors.pureWhite,
    fontWeight: 'bold',
    letterSpacing: 2, // Added letter spacing for better appearance
  },
});

export default SplashScreen;
