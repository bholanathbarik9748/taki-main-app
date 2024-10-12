import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// Import your color scheme
import {colors} from '../../assets/color/colors';

// import your Icon
import EmailIcon from '../../assets/Svg/Email';
import PasswordIcon from '../../assets/Svg/Password';
import {styles} from './style/style';
import {LoginBody, LoginFieldsError} from './types/login';
import {globalFormHandler} from '../../utils/InputHandler/InputHandler';
import {isValidLoginBody} from './validation';
import {loginUser} from './services';
import AlertComponent from '../../components/Alert/Alert';

const SignIn = () => {
  const [formData, setFormData] = useState<LoginBody>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<LoginFieldsError>({
    email: false,
    password: false,
  });

  const [apiError, setApiError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignIn = async () => {
    // Validate the form
    const isValid: boolean = isValidLoginBody(formData, setError);
    if (!isValid) {
      return;
    }

    setIsLoading(true);
    try {
      // Call loginUser
      const response = await loginUser(formData);

      // Check if the response contains the expected data
      if (response) {
        // Handle successful login (e.g., save token, navigate to the next screen)
        console.log('Login successful');
      } else {
        console.log('No response data');
      }
    } catch (errorCode) {
      setApiError(errorCode?.response?.data?.message || 'Login failed');
    }
    setIsLoading(false);
  };

  const handleAlreadyHaveAccount = () => {
    // Navigate to Sign In screen logic here
    console.log('Navigate to Sign In');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}> Login </Text>
        <View
          style={[
            styles.inputContainer,
            error?.email && styles?.errorBorder,
            error?.email ? styles?.errorMargin : styles?.noErrorMargin,
          ]}>
          <EmailIcon />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.lightGray}
            value={formData?.email}
            onChangeText={text =>
              globalFormHandler('email', text, setFormData, setError)
            }
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        {error?.email && (
          <Text style={styles.errorMessage}>Please Enter A valid Email</Text>
        )}
        <View
          style={[
            styles.inputContainer,
            error?.password && styles?.errorBorder,
            error?.password ? styles?.errorMargin : styles?.noErrorMargin,
          ]}>
          <PasswordIcon />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.lightGray}
            value={formData?.password}
            onChangeText={text =>
              globalFormHandler('password', text, setFormData, setError)
            }
            secureTextEntry
            autoCapitalize="none"
          />
        </View>
        {error?.password && (
          <Text style={styles.errorMessage}>Please Enter A valid Password</Text>
        )}

        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.accent}]}
          onPress={handleSignIn}
          disabled={isLoading}>
          <Text style={styles.buttonText}>
            {isLoading ? 'Please wait...' : 'Continue'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}> Forgot Password ? </Text>
        </TouchableOpacity>

        {/* Already have an account */}
        <TouchableOpacity onPress={handleAlreadyHaveAccount}>
          <Text style={styles.alreadyAccount}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {apiError && (
        <AlertComponent
          title="Error"
          message={apiError}
          cancelText="Cancel"
          closeAction={() => setApiError('')}
        />
      )}
    </SafeAreaView>
  );
};

export default SignIn;
