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

const SignIn = () => {
  const [formData, setFormData] = useState<LoginBody>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<LoginFieldsError>({
    email: false,
    password: false,
  });

  const handleSignIn = async () => {
    // Add sign-in logic here
    const isValid: boolean = isValidLoginBody(formData, setError);
    if (!isValid) {
      return;
    }

    try {
      const response = await loginUser(formData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
            error?.password && styles?.errorBorder,
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
          onPress={handleSignIn}>
          <Text style={styles.buttonText}> Continue </Text>
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
    </SafeAreaView>
  );
};

export default SignIn;
