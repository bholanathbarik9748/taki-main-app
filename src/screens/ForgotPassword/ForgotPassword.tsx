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
import {styles} from './styles/style';
import {globalFormHandler} from '../../utils/InputHandler/InputHandler';
import {
  forgotPasswordError,
  forgotPasswordForm,
} from './types/ForgotPasswordType';

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<forgotPasswordForm>({
    email: '',
    otp: '',
    newPassword: '',
  });
  const [error, setError] = useState<forgotPasswordError>({
    email: false,
    otp: false,
    newPassword: false,
  });

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
        <TouchableOpacity
          style={[styles.button, {backgroundColor: colors.accent}]}
          disabled={isLoading}>
          <Text style={styles.buttonText}>
            {isLoading ? 'Please wait...' : 'Continue'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}> Forgot Password ? </Text>
        </TouchableOpacity>

        {/* Already have an account */}
        <TouchableOpacity>
          <Text style={styles.alreadyAccount}>
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
