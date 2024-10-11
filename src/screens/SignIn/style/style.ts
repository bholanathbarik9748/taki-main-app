import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/color/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkPrimary, // Use primary color for background
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '85%',
    padding: 30,
    backgroundColor: colors.darkSecondary, // Use secondary color for form container
    borderRadius: 15, // More rounded corners for a modern look
    shadowColor: colors.pureBlack,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
    elevation: 8, // Add more shadow to elevate the form
  },
  title: {
    fontSize: 32, // Larger font size for the title
    color: colors.accent, // Accent color for the title
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    backgroundColor: colors.darkPrimary, // Dark primary color for input fields
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 22,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.pureWhite, // White text color for input
    marginLeft: 10,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: colors.accent,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 6, // Add a shadow for depth
    elevation: 8,
  },
  buttonText: {
    color: colors.pureWhite, // White text color for button text
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: colors.lightGray, // Light gray for "Forgot Password"
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
  alreadyAccount: {
    color: colors.lightGray, // Light gray for "Already have an account?"
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
  errorMessage: {
    color: colors?.pureRed,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
  },
  errorBorder: {
    borderColor: colors.pureRed,
    borderWidth: 1,
  },
});
