import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/color/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '85%',
    padding: 30,
    backgroundColor: colors.darkSecondary,
    borderRadius: 20, // Slightly more rounded
    shadowColor: colors.pureBlack,
    shadowOpacity: 0.3, // Slightly stronger shadow for modern look
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 12,
    elevation: 10, // More elevation for depth
    marginBottom: 20, // Add margin at the bottom for spacing
  },
  title: {
    fontSize: 34, // Larger title for better readability
    color: colors.accent,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55, // Increase height for a more luxurious feel
    backgroundColor: colors.darkPrimary,
    borderRadius: 12, // Slightly larger border radius
    paddingHorizontal: 14, // More padding for input fields
    borderWidth: 1, // Add subtle border for distinction
    borderColor: colors.lightGray,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.pureWhite,
    marginLeft: 10,
  },
  button: {
    paddingVertical: 18, // Taller buttons for better interaction
    borderRadius: 12, // More rounded buttons
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: colors.accent,
    shadowOpacity: 0.6,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 8,
    elevation: 10, // Enhanced shadow for a standout button
    backgroundColor: colors.accent, // Use accent color
  },
  buttonText: {
    color: colors.pureWhite,
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: colors.lightGray,
    textAlign: 'center',
    marginTop: 15, // Adjust spacing for better flow
    fontSize: 16,
  },
  alreadyAccount: {
    color: colors.lightGray,
    textAlign: 'center',
    marginTop: 16, // Larger spacing for better clarity
    fontSize: 16,
  },
  errorMessage: {
    color: colors.pureRed,
    fontSize: 13, // Slightly larger for readability
    marginBottom: 12,
    marginLeft: 12,
  },
  errorBorder: {
    borderColor: colors.pureRed,
    borderWidth: 1.5, // Stronger border to emphasize error
  },
  noErrorMargin: {
    marginBottom: 24,
  },
  errorMargin: {
    marginBottom: 5,
  },
});
